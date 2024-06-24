import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
// import { Layout } from "./pages/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          {/* Definisikan rute-rute lain di sini sesuai kebutuhan aplikasi Anda */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
