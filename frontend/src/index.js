import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './landing_page/signup/Signup'
import Login from './landing_page/login/login'
import AboutPage from './landing_page/about/AboutPage'
import ProductsPage from './landing_page/products/ProductsPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import 'react-toastify/ReactToastify.css';
import User from "./landing_page/User";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/user" element={<User/>} /> 
      <Route path="/" element={<HomePage />} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/about" element={<AboutPage />} /> 
      <Route path="/products" element={<ProductsPage />} /> 
      <Route path="/pricing" element={<PricingPage />} /> 
      <Route path="/support" element={<SupportPage />} /> 
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  <Footer/>
  </BrowserRouter>
);
