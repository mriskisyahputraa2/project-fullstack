import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config(); // mengizinkan membuat variabel lingkup dari file .env

const app = express(); // inisialisai express

// middleware untuk session
app.use(
  session({
    secret: process.env.SESS_SECRET, // digunakan untuk kunci rahasia ID session
    resave: false, // mencegah session disimpan kembali ke storage jika tidak ada perubahan selama requset
    saveUninitialized: true, // memakasa session yg baru, tapi tdk dimodifikasi, untuk disimpan ke storage
    //  Mengatur cookie hanya digunakan pada koneksi HTTP
    cookie: {
      secure: "auto", // mau itu HTTPS / HTTP ini akan otomatis
    },
  })
);

// middleware untuk cors
app.use(
  cors({
    credentials: true, // Mengizinkan cookie dan header otentikasi lain dikirim dalam permintaan lintas origin.
    origin: "http://localhost:3000", // Mengizinkan permintaan apapun itu dari origin http://localhost:3000.
  })
);

app.use(express.json());
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
