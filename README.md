# UMKM Store — Google Sheets Edition

Seperti store.link: cukup tempel **link Google Sheet**, langsung jadi toko online.

## Jalankan di Lokal
```bash
npm install
npx prisma migrate dev --name init
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000)

## Deploy ke Vercel
1. Push repo ini ke GitHub
2. Login ke [vercel.com](https://vercel.com)
3. Klik New Project → pilih repo → Deploy

## Penting
- `node_modules/` tidak ikut di-commit (otomatis diinstall di Vercel)
- `prisma/dev.db` hanya untuk lokal
- `.env` jangan diupload
