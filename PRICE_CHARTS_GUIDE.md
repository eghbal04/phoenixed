# راهنمای صفحه چارت‌های قیمت

این راهنما نحوه استفاده از صفحه چارت‌های قیمت را توضیح می‌دهد.

## 🚀 دسترسی به صفحه

### روش 1: از صفحه اصلی
1. صفحه `index.html` را باز کنید
2. روی دکمه **"📊 Price Charts"** کلیک کنید

### روش 2: مستقیم
- فایل `price-charts.html` را مستقیماً در مرورگر باز کنید

## 📊 ویژگی‌های صفحه

### 1. کنترل‌های زمان
- **Time Range**: انتخاب بازه زمانی (1 ساعت تا 30 روز)
- **Token**: انتخاب نوع توکن (IAM, DAI, ETH)
- **Point Type**: انتخاب نوع پوینت (Binary Points, Referral Points, Monthly Points)
- **Auto Refresh**: تنظیم به‌روزرسانی خودکار (30 ثانیه تا 5 دقیقه)

### 2. چارت توکن
- نمایش قیمت لحظه‌ای توکن
- آمار 24 ساعته (قیمت فعلی، تغییر قیمت، حجم)
- نمودار خطی با رنگ سبز
- قابلیت زوم و تعامل

### 3. چارت پوینت
- نمایش قیمت لحظه‌ای پوینت‌ها
- آمار (قیمت فعلی، ارزش به IAM، عرضه کل)
- نمودار خطی با رنگ بنفش
- قابلیت زوم و تعامل

## 🔧 نحوه استفاده

### 1. تغییر بازه زمانی
```javascript
// انتخاب 24 ساعت
document.getElementById('timeRange').value = '24';

// انتخاب 7 روز
document.getElementById('timeRange').value = '168';
```

### 2. تغییر نوع توکن
```javascript
// انتخاب IAM
document.getElementById('tokenSymbol').value = 'IAM';

// انتخاب DAI
document.getElementById('tokenSymbol').value = 'DAI';
```

### 3. تغییر نوع پوینت
```javascript
// انتخاب Binary Points
document.getElementById('pointType').value = 'binary_points';

// انتخاب Referral Points
document.getElementById('pointType').value = 'referral_points';
```

### 4. تنظیم به‌روزرسانی خودکار
```javascript
// غیرفعال کردن
document.getElementById('refreshInterval').value = '0';

// هر 30 ثانیه
document.getElementById('refreshInterval').value = '30';

// هر 5 دقیقه
document.getElementById('refreshInterval').value = '300';
```

## 📈 انواع نمودارها

### نمودار خطی (Line Chart)
- مناسب برای نمایش روند قیمت
- قابلیت نمایش چندین خط
- رنگ‌بندی متفاوت برای هر دارایی

### نمودار ناحیه‌ای (Area Chart)
- پر کردن ناحیه زیر خط
- نمایش بهتر حجم تغییرات
- شفافیت مناسب برای همپوشانی

## 🎨 تنظیمات ظاهری

### رنگ‌ها
- **توکن IAM**: سبز (`#00ff88`)
- **پوینت‌ها**: بنفش (`#a786ff`)
- **پس‌زمینه**: تیره با گرادیان
- **متن**: سفید و خاکستری

### انیمیشن‌ها
- ورود تدریجی کارت‌ها
- تغییر رنگ هنگام hover
- انیمیشن بارگذاری

## 🔄 به‌روزرسانی داده‌ها

### روش دستی
```javascript
// کلیک روی دکمه Refresh
refreshCharts();
```

### روش خودکار
```javascript
// تنظیم هر 30 ثانیه
setInterval(refreshCharts, 30000);
```

## 📊 آمار نمایش داده شده

### توکن
- **Current Price**: قیمت فعلی به دلار
- **24h Change**: تغییر قیمت 24 ساعته
- **24h Volume**: حجم معاملات 24 ساعته

### پوینت
- **Current Price**: قیمت فعلی به دلار
- **Value in IAM**: ارزش به IAM
- **Total Supply**: عرضه کل

## 🛠️ تنظیمات پیشرفته

### تغییر اندازه نمودار
```css
.chart-container {
  height: 400px; /* تغییر ارتفاع */
  width: 100%;   /* تغییر عرض */
}
```

### تغییر رنگ نمودار
```javascript
// تغییر رنگ توکن
borderColor: '#00ff88',
backgroundColor: 'rgba(0, 255, 136, 0.1)',

// تغییر رنگ پوینت
borderColor: '#a786ff',
backgroundColor: 'rgba(167, 134, 255, 0.1)',
```

### اضافه کردن نمودار جدید
```javascript
// ایجاد نمودار جدید
const newChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'New Chart',
      data: data,
      borderColor: '#ff6b6b',
      backgroundColor: 'rgba(255, 107, 107, 0.1)'
    }]
  },
  options: chartOptions
});
```

## 📱 سازگاری موبایل

### تنظیمات ریسپانسیو
- Grid layout برای موبایل
- نمودارهای تمام عرض
- کنترل‌های لمسی

### بهینه‌سازی عملکرد
- کاهش تعداد نقاط داده
- استفاده از requestAnimationFrame
- Lazy loading نمودارها

## 🔍 عیب‌یابی

### مشکلات رایج

1. **نمودار نمایش داده نمی‌شود**
   - بررسی اتصال دیتابیس
   - بررسی وجود داده
   - بررسی console برای خطا

2. **داده‌ها به‌روز نمی‌شوند**
   - بررسی auto refresh
   - بررسی اتصال شبکه
   - بررسی دیتابیس

3. **عملکرد کند**
   - کاهش تعداد نقاط داده
   - غیرفعال کردن انیمیشن‌ها
   - بهینه‌سازی کوئری‌ها

### بررسی وضعیت
```javascript
// بررسی اتصال دیتابیس
console.log('Database connected:', !!priceService);

// بررسی داده‌ها
const data = await priceService.getLatestTokenPrice('IAM');
console.log('Latest data:', data);
```

## 📚 منابع بیشتر

- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [Neon Database Documentation](https://neon.tech/docs)
- [Web3 Integration Guide](./NEON_DATABASE_SETUP.md)
- [Price Service Guide](./PRICE_SERVICE_GUIDE.md)

## 🆘 پشتیبانی

برای مشکلات فنی:
1. بررسی console مرورگر
2. بررسی اتصال دیتابیس
3. بررسی وجود داده‌های نمونه
4. تماس با تیم توسعه

