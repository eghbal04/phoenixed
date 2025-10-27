# راهنمای سیستم قیمت‌های واقعی

این راهنما نحوه استفاده از سیستم قیمت‌های واقعی متصل به کنترکت IAM را توضیح می‌دهد.

## 🎯 ویژگی‌های سیستم

### 1. اتصال مستقیم به کنترکت
- دریافت قیمت واقعی توکن IAM از کنترکت
- محاسبه قیمت پوینت‌ها بر اساس قیمت IAM
- ذخیره خودکار در دیتابیس Neon

### 2. پشتیبانی از انواع پوینت
- **Binary Points**: 1 پوینت = 0.1 IAM
- **Referral Points**: 1 پوینت = 0.05 IAM  
- **Monthly Points**: 1 پوینت = 0.2 IAM

### 3. چارت‌های تعاملی
- نمودار قیمت توکن IAM
- نمودار قیمت انواع پوینت‌ها
- به‌روزرسانی خودکار

## 🚀 نحوه استفاده

### 1. اتصال کیف پول
```javascript
// اتصال خودکار هنگام باز کردن صفحه
const priceService = new RealPriceService();
await priceService.connectToContract();
```

### 2. دریافت قیمت‌های واقعی
```javascript
// دریافت قیمت توکن IAM
const tokenPrice = await priceService.getRealTokenPrice();

// دریافت قیمت پوینت
const pointPrice = await priceService.getRealPointPrice('binary_points');
```

### 3. ذخیره در دیتابیس
```javascript
// ذخیره همه قیمت‌ها
await priceService.updatePrices();

// ذخیره فقط توکن
await priceService.saveRealTokenPrice();

// ذخیره فقط پوینت
await priceService.saveRealPointPrice('binary_points');
```

## 📊 ساختار داده‌ها

### توکن IAM
```javascript
{
  symbol: "IAM",
  name: "IAM Token",
  priceUsd: 0.001234,
  priceDai: 0.001234,
  marketCap: 1234567.89,
  totalSupply: 1000000000,
  decimals: 18,
  source: "contract"
}
```

### پوینت‌ها
```javascript
{
  pointType: "binary_points",
  pointValue: 0.000123,
  pointValueUsd: 0.000123,
  pointValueIam: 0.1,
  totalSupply: 1000000000,
  source: "contract"
}
```

## 🔧 تنظیمات کنترکت

### آدرس کنترکت
```javascript
const IAM_ADDRESS = '0x2D3923A5ba62B2bec13b9181B1E9AE0ea2C8118D';
```

### ABI مورد نیاز
```javascript
const IAM_ABI = [
  "function getTokenPrice() view returns (uint256)",
  "function estimateBuy(uint256 daiAmount) view returns (uint256)",
  "function estimateSell(uint256 iamAmount) view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)"
];
```

## 📈 چارت‌های قیمت

### 1. چارت توکن IAM
- نمایش قیمت لحظه‌ای
- آمار 24 ساعته
- نمودار خطی سبز

### 2. چارت پوینت‌ها
- انتخاب نوع پوینت
- نمایش ارزش به IAM
- نمودار خطی بنفش

## ⚙️ تنظیمات پیشرفته

### تغییر نسبت پوینت‌ها
```javascript
// در فایل real-price-service.js
switch (pointType) {
  case 'binary_points':
    pointValueInIam = 0.1; // تغییر این مقدار
    break;
  case 'referral_points':
    pointValueInIam = 0.05; // تغییر این مقدار
    break;
  case 'monthly_points':
    pointValueInIam = 0.2; // تغییر این مقدار
    break;
}
```

### تنظیم به‌روزرسانی خودکار
```javascript
// هر 5 دقیقه
priceService.startAutoUpdate(5);

// هر 10 دقیقه
priceService.startAutoUpdate(10);
```

## 🔄 فرآیند کار

### 1. بارگذاری صفحه
1. اتصال به MetaMask
2. اتصال به کنترکت IAM
3. دریافت قیمت‌های واقعی
4. ذخیره در دیتابیس
5. نمایش در چارت‌ها

### 2. به‌روزرسانی خودکار
1. دریافت قیمت جدید از کنترکت
2. محاسبه قیمت پوینت‌ها
3. ذخیره در دیتابیس
4. به‌روزرسانی چارت‌ها

## 🚨 نکات مهم

### 1. اتصال کیف پول
- MetaMask باید نصب باشد
- باید به شبکه Polygon متصل باشد
- باید کنترکت IAM در دسترس باشد

### 2. عملکرد
- قیمت‌ها از کنترکت واقعی دریافت می‌شوند
- محاسبات بر اساس قیمت IAM انجام می‌شود
- داده‌ها در دیتابیس Neon ذخیره می‌شوند

### 3. امنیت
- هیچ کلید خصوصی ذخیره نمی‌شود
- فقط خواندن از کنترکت انجام می‌شود
- اتصال امن به دیتابیس

## 🔍 عیب‌یابی

### مشکلات رایج

1. **"کنترکت در دسترس نیست"**
   - بررسی اتصال MetaMask
   - بررسی شبکه (باید Polygon باشد)
   - بررسی آدرس کنترکت

2. **"خطا در دریافت قیمت"**
   - بررسی ABI کنترکت
   - بررسی تابع getTokenPrice
   - بررسی اتصال شبکه

3. **"داده ذخیره نمی‌شود"**
   - بررسی اتصال دیتابیس
   - بررسی URL دیتابیس
   - بررسی جدول‌ها

### بررسی وضعیت
```javascript
// بررسی اتصال کنترکت
console.log('Contract connected:', !!priceService.contract);

// بررسی اتصال دیتابیس
console.log('Database connected:', !!priceService.sql);

// بررسی آخرین قیمت
const price = await priceService.getLatestTokenPrice('IAM');
console.log('Latest price:', price);
```

## 📚 فایل‌های مرتبط

- `real-price-service.js` - سرویس اصلی
- `price-charts.html` - صفحه چارت‌ها
- `database-schema.sql` - ساختار دیتابیس
- `PRICE_SERVICE_GUIDE.md` - راهنمای کامل

## 🆘 پشتیبانی

برای مشکلات فنی:
1. بررسی console مرورگر
2. بررسی اتصال MetaMask
3. بررسی شبکه Polygon
4. تماس با تیم توسعه

