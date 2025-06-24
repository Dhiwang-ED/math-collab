# Math Collab

Website kolaborasi pembelajaran matematika seperti Mathway & GeoGebra  
Fitur: menulis rumus matematika, menggambar (warna), dan kolaborasi real-time!

## Struktur

```
math-collab/
├── backend/
├── frontend/
├── .gitignore
└── README.md
```

## Cara Menjalankan

1. **Clone repo ini**
2. **Install dependencies**
   - Backend:  
     ```
     cd backend
     npm install
     ```
   - Frontend:  
     ```
     cd ../frontend
     npm install
     ```
3. **Jalankan backend**
   ```
   cd ../backend
   node server.js
   ```
4. **Jalankan frontend**
   ```
   cd ../frontend
   npm start
   ```
5. **Akses di browser**  
   Buka [http://localhost:3000](http://localhost:3000)

## Fitur

- Input persamaan matematika (LaTeX)
- Kanvas gambar (warna & freehand)
- Kolaborasi real-time (socket)
- Warna bebas untuk menulis/menggambar

## Pengembangan Selanjutnya

- Autentikasi pengguna (login/register)
- Penyimpanan soal/jawaban ke database
- History dan skor siswa
- Export soal/jawaban
- Fitur komentar/chat classroom

---

Kontribusi dan pengembangan lanjutan sangat terbuka!