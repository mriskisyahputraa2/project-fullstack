import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
// import db from "./config/database.js";
import UserRoute from "./routes/UserRoute.js"; // Pastikan path ini benar
import ProductRoute from "./routes/ProductRoute.js"; // Pastikan path ini benar
dotenv.config(); // Mengizinkan penggunaan variabel lingkungan dari file .env

const app = express(); // Inisialisasi express

// Middleware untuk parsing JSON
app.use(express.json());

// Sinkronisasi database
// (async () => {
//   await db.sync();
// })();

// Middleware untuk session
app.use(
  session({
    secret: process.env.SESS_SECRET, // Digunakan untuk kunci rahasia ID session
    resave: false, // Mencegah session disimpan kembali ke storage jika tidak ada perubahan selama request
    saveUninitialized: true, // Memaksa session yang baru, tapi tidak dimodifikasi, untuk disimpan ke storage
    cookie: {
      secure: "auto", // Mengatur cookie untuk digunakan pada koneksi HTTP/HTTPS secara otomatis
    },
  })
);

// Middleware untuk CORS
app.use(
  cors({
    credentials: true, // Mengizinkan cookie dan header otentikasi lain dikirim dalam permintaan lintas origin
    origin: "http://localhost:3000", // Mengizinkan permintaan dari origin http://localhost:3000
  })
);

// Middleware route user & product
app.use(UserRoute); // Menggunakan route User
app.use(ProductRoute); // Menggunakan route Product

// Menjalankan server pada port yang ditentukan dalam variabel lingkungan
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
