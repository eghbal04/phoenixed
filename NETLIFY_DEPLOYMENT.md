# راهنمای دیپلوی روی Netlify

این راهنمای کامل برای دیپلوی کردن پروژه imphoenix روی Netlify است.

## پیش‌نیازها

1. اکانت Netlify (رایگان)
2. اکانت GitHub
3. اکانت Neon (برای دیتابیس PostgreSQL)
4. Node.js نصب شده (برای تست محلی)

## مراحل دیپلوی

### 1. آماده‌سازی پروژه

```bash
# کپی کردن فایل‌ها
cp api/env-example.txt .env
```

سپس فایل `.env` را ویرایش کنید و متغیرهای زیر را اضافه کنید:

```env
DATABASE_URL=your_neon_database_url_here
```

### 2. اضافه کردن به GitHub

```bash
git init
git add .
git commit -m "Initial commit for Netlify deployment"
git branch -M main
git remote add origin https://github.com/yourusername/yourrepository.git
git push -u origin main
```

### 3. دیپلوی روی Netlify

#### روش 1: دیپلوی از GitHub (توصیه شده)

1. به [netlify.com](https://netlify.com) بروید و وارد اکانت خود شوید
2. روی **"Add new site"** کلیک کنید
3. **"Import an existing project"** را انتخاب کنید
4. **"Deploy with GitHub"** را کلیک کنید
5. مخزن GitHub خود را انتخاب کنید
6. تنظیمات زیر را انجام دهید:
   - **Build command**: خالی بگذارید یا `echo 'No build needed'`
   - **Publish directory**: `.` (نقطه - ریشه پروژه)
7. روی **"Deploy site"** کلیک کنید

#### روش 2: دیپلوی دستی

```bash
# نصب Netlify CLI
npm install -g netlify-cli

# لاگین به Netlify
netlify login

# دیپلوی
netlify deploy --prod
```

### 4. تنظیم متغیرهای محیطی

1. در پنل Netlify، به بخش **Site settings** بروید
2. **Environment variables** را انتخاب کنید
3. متغیرهای زیر را اضافه کنید:

```
DATABASE_URL=your_neon_database_url
```

### 5. تست دیپلوی

بعد از دیپلوی موفق، به آدرس زیر بروید:

```
https://your-site-name.netlify.app/api/.netlify/functions/price-api/health
```

اگر پیام `{"success":true,"message":"API is running"}` دیدید، دیپلوی موفق بوده است.

## ساختار فایل‌ها

```
.
├── index.html              # صفحه اصلی
├── netlify.toml            # تنظیمات Netlify
├── _redirects              # ریدایرکت‌ها
├── netlify/
│   └── functions/
│       ├── price-api.js   # API serverless function
│       └── package.json   # Dependencies for functions
└── api/                    # API محلی (فقط برای توسعه)
```

## نکات مهم

### 1. دیتابیس

- از **Neon PostgreSQL** استفاده کنید (رایگان)
- به آدرس: https://neon.tech بروید
- یک پروژه جدید بسازید
- `DATABASE_URL` را از پنل کپی کنید

### 2. API Endpoints

بعد از دیپلوی، آدرس‌های API به صورت زیر خواهند بود:

```
https://your-site.netlify.app/api/health
https://your-site.netlify.app/api/token-prices
https://your-site.netlify.app/api/point-prices
```

### 3. CORS

CORS برای همه دامین‌ها فعال است (`Access-Control-Allow-Origin: *`)

### 4. Build Settings

در Netlify:

- **Build command**: خالی یا `echo 'No build'`
- **Publish directory**: `.`
- **Functions directory**: `netlify/functions`

## تست محلی

برای تست API محلی:

```bash
# اجرای frontend
npm start

# در ترمینال جداگانه برای API
cd api
node price-api.js
```

API محلی در آدرس `http://localhost:3000` اجرا می‌شود.

## رفع مشکل‌های رایج

### مشکل 1: Function not found

**راه حل**: مطمئن شوید فایل `netlify/functions/price-api.js` وجود دارد و در GitHub commit شده است.

### مشکل 2: Database connection error

**راه حل**: بررسی کنید که `DATABASE_URL` در Environment variables Netlify تنظیم شده است.

### مشکل 3: CORS error

**راه حل**: فایل `netlify/functions/price-api.js` را بررسی کنید - headers CORS باید اضافه شده باشند.

## به‌روزرسانی پروژه

بعد از تغییرات:

```bash
git add .
git commit -m "Update description"
git push
```

Netlify به صورت خودکار build و دیپلوی می‌کند.

## لینک‌های مفید

- Netlify Docs: https://docs.netlify.com
- Neon Database: https://neon.tech
- GitHub: https://github.com

## پشتیبانی

اگر مشکلی دارید، به فایل‌های زیر مراجعه کنید:

- `netlify.toml` - تنظیمات Netlify
- `netlify/functions/price-api.js` - کد API
- `_redirects` - ریدایرکت‌ها

