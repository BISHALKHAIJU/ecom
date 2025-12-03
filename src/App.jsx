import React from "react";
import Headline from "./components/Headline";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import AllProductPage from "./pages/ShopPage/allProductPage.jsx";
import MenCategoryPage from "./pages/ShopPage/MenCategoryPage.jsx";
import WomenCategoryPage from "./pages/ShopPage/WomenCategoryPage.jsx";
import DetailPage from "./pages/ShopPage/DetailPage.jsx";

const App = () => {
  return (
    <>
      <CartProvider>
        <div>
          <Headline />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/allProducts" element={<AllProductPage />} />
            <Route path="/shop/men" element={<MenCategoryPage />} />
            <Route path="/shop/women" element={<WomenCategoryPage />} />
            <Route path="/product/:id" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
};

export default App;
