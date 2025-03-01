import "./App.css";
import React from "react";
import Product from "./Apifetch/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetailPage from "./Pages/Productdetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactUs";
import WomenWear from "./Pages/WomenWear";
import MensWear from "./Pages/MensWear";
import AddToCart from "./components/AddToCart";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import CheckOutPage from "./Pages/CheckOutPage";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />{" "}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/menswear" element={<MensWear />} />
        <Route path="/womenswear" element={<WomenWear />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/checkout" element={<CheckOutPage/>}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
