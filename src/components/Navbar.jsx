import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center h-16">
        <Link to="/" className="text-lg font-bold">
          Products
        </Link>
        <SearchBar />
        <Link to="/cart" className="relative text-2xl">
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
