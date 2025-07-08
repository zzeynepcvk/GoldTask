# GoldApiTask

## Proje Tanımı
GoldApiTask, gerçek zamanlı altın fiyatlarına göre dinamik olarak hesaplanan ürün fiyatlarını listeleyen, renk ve popülerlik filtreleri içeren, React frontend ve Express backend kullanan bir ürün listeleme uygulamasıdır.

---

## Özellikler
- Express tabanlı backend ile ürün verilerinin JSON dosyasından sunulması  
- Gerçek zamanlı altın fiyatı çekilerek ürün fiyatlarının dinamik hesaplanması  
- React frontend ile ürünlerin görsel, fiyat, ağırlık ve popülerlik puanı gösterimi  
- Renk seçici ile ürün görsellerinin renk bazında değiştirilmesi  
- Popülerlik puanının 5 üzerinden yıldızlarla görselleştirilmesi  
- Backend tarafında fiyat ve popülerlik filtreleme (isteğe bağlı)

---

## Teknolojiler
- Backend: Node.js, Express.js  
- Frontend: React.js, Tailwind CSS  
- API: Altın fiyatı için GoldAPI kullanımı  
- Versiyon Kontrol: Git, GitHub  
- Deployment: Vercel (frontend), Render (backend)

---

## Kurulum

### Backend
1. `backend` klasörüne gidin  
2. Gerekli paketleri yükleyin:  
   ```bash
   npm install
