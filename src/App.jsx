import React from "react";
import "./index.css";
import Manager from "./components/Manager";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[92vh]">
        <Routes>
          <Route path="/" element={<Manager />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}
