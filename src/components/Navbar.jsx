import {
  Search,
  ShoppingCart,
  User2,
  ChevronDown,
  Menu,
  X,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  return (
    <>
      {/* MAIN NAVBAR */}
      <div className="flex justify-between items-center px-4 py-4 md:px-10 md:py-5 shadow-sm bg-white sticky top-0 z-40">
        {/* LOGO */}
        <Link to="/" className="text-3xl md:text-4xl font-bold">
          नयाँPASAL
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-lg">
          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
              className="flex items-center gap-1 hover:text-gray-600 transition"
            >
              Shop
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  shopDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {shopDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                <Link
                  to="/allProducts"
                  onClick={() => setShopDropdownOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition text-gray-800"
                >
                  All Products
                </Link>
                <Link
                  to="/shop/men"
                  onClick={() => setShopDropdownOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition text-gray-800"
                >
                  Men's Fashion
                </Link>
                <Link
                  to="/shop/women"
                  onClick={() => setShopDropdownOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition text-gray-800 "
                >
                  Women's Fashion
                </Link>
              </div>
            )}
          </div>

          <Link to="/onsale" className="hover:text-gray-600 transition">
            On Sale
          </Link>
          <Link to="/new" className="hover:text-gray-600 transition">
            New Arrivals
          </Link>
          <Link to="/brands" className="hover:text-gray-600 transition">
            Brands
          </Link>
        </div>

        {/* RIGHT SIDE: SEARCH + ICONS */}
        <div className="flex items-center gap-6">
          {/* SEARCH BAR (Desktop only) */}
          <div className="hidden md:block relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-12 pr-6 py-3 w-80 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-5">
            {/* CART ICON WITH BADGE */}
            <Link to="/cart" className="relative group">
              <ShoppingCart className="w-7 h-7 text-gray-800 group-hover:scale-110 transition" />

              {/* Badge - shows only if items > 0 */}
              {/* {totalItems > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-bounce">
                  {totalItems}
                </span> */}
              {/* )} */}
            </Link>

            {/* USER ICON */}
            {User ? (
              <Link to="/login">
                <User2 className="w-7 h-7 text-gray-800 hover:scale-110 transition" />
              </Link>
            ) : (
              <Link to="/login">
                <User2 className="w-7 h-7 text-gray-800 hover:scale-110 transition" />
              </Link>
            )}

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setMenuOpen(true)} className="lg:hidden">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="bg-white w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="px-6 py-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-full"
                />
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 px-8 py-10 text-xl">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/shop" onClick={() => setMenuOpen(false)}>
                Shop All
              </Link>
              <Link to="/shop/men" onClick={() => setMenuOpen(false)}>
                Men's
              </Link>
              <Link to="/shop/women" onClick={() => setMenuOpen(false)}>
                Women's
              </Link>
              <Link to="/onsale" onClick={() => setMenuOpen(false)}>
                On Sale
              </Link>
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="font-bold"
              >
                Cart ({totalItems} items)
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
