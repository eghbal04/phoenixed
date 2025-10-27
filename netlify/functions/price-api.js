const { Pool } = require('pg');

// Database connection
let pool;

function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
  return pool;
}

// Health check
async function healthCheck() {
  return {
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  };
}

// Clear database
async function clearDatabase(event) {
  try {
    const dbPool = getPool();
    console.log('🗑️ Clearing database...');
    
    // Clear token_prices table
    await dbPool.query('DELETE FROM token_prices');
    console.log('✅ Token prices cleared');
    
    // Clear point_prices table
    await dbPool.query('DELETE FROM point_prices');
    console.log('✅ Point prices cleared');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Database cleared successfully'
      })
    };
  } catch (error) {
    console.error('Error clearing database:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
}

// Get token prices
async function getTokenPrices(event) {
  try {
    const dbPool = getPool();
    const { symbol, hours = 24 } = event.queryStringParameters || {};
    
    const query = `
      SELECT * FROM token_prices 
      WHERE symbol = $1 
      AND created_at >= NOW() - INTERVAL '${hours} hours'
      ORDER BY created_at DESC
    `;
    
    const result = await dbPool.query(query, [symbol]);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data: result.rows,
        count: result.rows.length
      })
    };
  } catch (error) {
    console.error('Error fetching token prices:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
}

// Get point prices
async function getPointPrices(event) {
  try {
    const dbPool = getPool();
    const { pointType, hours = 24 } = event.queryStringParameters || {};
    
    const query = `
      SELECT * FROM point_prices 
      WHERE point_type = $1 
      AND created_at >= NOW() - INTERVAL '${hours} hours'
      ORDER BY created_at DESC
    `;
    
    const result = await dbPool.query(query, [pointType]);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data: result.rows,
        count: result.rows.length
      })
    };
  } catch (error) {
    console.error('Error fetching point prices:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
}

// Save token price
async function saveTokenPrice(event) {
  try {
    const dbPool = getPool();
    const body = JSON.parse(event.body || '{}');
    const { symbol, name, priceUsd, priceDai, marketCap, totalSupply, decimals, source } = body;
    
    // Check if we should save (only if different from latest)
    const latestQuery = `
      SELECT price_usd FROM token_prices 
      WHERE symbol = $1 
      ORDER BY created_at DESC 
      LIMIT 1
    `;
    const latestResult = await dbPool.query(latestQuery, [symbol]);
    
    if (latestResult.rows.length > 0) {
      const latestPrice = parseFloat(latestResult.rows[0].price_usd);
      const newPrice = parseFloat(priceUsd);
      
      const priceDifference = Math.abs(latestPrice - newPrice);
      const tolerance = Math.max(1e-20, Math.abs(latestPrice) * 0.001);
      
      if (priceDifference < tolerance) {
        console.log(`📊 Price unchanged for ${symbol}: ${latestPrice} ≈ ${newPrice}`);
        return {
          statusCode: 200,
          body: JSON.stringify({
            success: true,
            message: 'Price unchanged, not saved',
            saved: false,
            latestPrice: latestPrice,
            newPrice: newPrice,
            difference: priceDifference
          })
        };
      }
    }
    
    const insertQuery = `
      INSERT INTO token_prices (symbol, name, price_usd, price_dai, market_cap, total_supply, decimals, source)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;
    
    const result = await dbPool.query(insertQuery, [
      symbol, name, priceUsd, priceDai, marketCap, totalSupply, decimals, source
    ]);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data: result.rows[0],
        saved: true
      })
    };
  } catch (error) {
    console.error('Error saving token price:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
}

// Save point price
async function savePointPrice(event) {
  try {
    const dbPool = getPool();
    const body = JSON.parse(event.body || '{}');
    const { pointType, pointValueUsd, pointValueIam, source } = body;
    
    // Check if we should save (only if different from latest)
    const latestQuery = `
      SELECT point_value_usd FROM point_prices 
      WHERE point_type = $1 
      ORDER BY created_at DESC 
      LIMIT 1
    `;
    const latestResult = await dbPool.query(latestQuery, [pointType]);
    
    if (latestResult.rows.length > 0) {
      const latestPrice = parseFloat(latestResult.rows[0].point_value_usd);
      const newPrice = parseFloat(pointValueUsd);
      
      const priceDifference = Math.abs(latestPrice - newPrice);
      const tolerance = 0.01;
      
      if (priceDifference < tolerance) {
        console.log(`📊 Point price unchanged for ${pointType}: ${latestPrice} ≈ ${newPrice}`);
        return {
          statusCode: 200,
          body: JSON.stringify({
            success: true,
            message: 'Price unchanged, not saved',
            saved: false,
            latestPrice: latestPrice,
            newPrice: newPrice,
            difference: priceDifference
          })
        };
      }
    }
    
    const insertQuery = `
      INSERT INTO point_prices (point_type, point_value_usd, point_value_iam, source)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    
    const result = await dbPool.query(insertQuery, [
      pointType, pointValueUsd, pointValueIam, source
    ]);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data: result.rows[0],
        saved: true
      })
    };
  } catch (error) {
    console.error('Error saving point price:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
}

// Get latest prices
async function getLatestPrices(event) {
  try {
    const dbPool = getPool();
    
    const tokenQuery = `
      SELECT * FROM token_prices 
      WHERE symbol = 'IAM' 
      ORDER BY created_at DESC 
      LIMIT 1
    `;
    
    const pointQuery = `
      SELECT * FROM point_prices 
      WHERE point_type = 'binary_points' 
      ORDER BY created_at DESC 
      LIMIT 1
    `;
    
    const [tokenResult, pointResult] = await Promise.all([
      dbPool.query(tokenQuery),
      dbPool.query(pointQuery)
    ]);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        token: tokenResult.rows[0] || null,
        point: pointResult.rows[0] || null
      })
    };
  } catch (error) {
    console.error('Error fetching latest prices:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
}

// Main handler
exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  const path = event.path.replace('/.netlify/functions/price-api', '');
  
  try {
    let result;
    
    switch (path) {
      case '/health':
      case '':
        result = await healthCheck();
        break;
      
      case '/clear-database':
        if (event.httpMethod === 'POST') {
          result = await clearDatabase(event);
        } else {
          result = {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
          };
        }
        break;
      
      case '/token-prices':
        if (event.httpMethod === 'GET') {
          result = await getTokenPrices(event);
        } else if (event.httpMethod === 'POST') {
          result = await saveTokenPrice(event);
        } else {
          result = {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
          };
        }
        break;
      
      case '/point-prices':
        if (event.httpMethod === 'GET') {
          result = await getPointPrices(event);
        } else if (event.httpMethod === 'POST') {
          result = await savePointPrice(event);
        } else {
          result = {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
          };
        }
        break;
      
      case '/latest-prices':
        if (event.httpMethod === 'GET') {
          result = await getLatestPrices(event);
        } else {
          result = {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
          };
        }
        break;
      
      default:
        result = {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Not found' })
        };
    }

    // Add CORS headers to result
    result.headers = { ...result.headers, ...headers };
    
    return result;
  } catch (error) {
    console.error('Handler error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};

