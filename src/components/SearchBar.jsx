import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/productSlice";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.products.searchQuery);

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <form className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Product"
        className="w-full border py-2 px-4 rounded shadow-sm focus:outline-none"
      />
      <FaSearch className="absolute top-3 right-3 text-red-500" />
    </form>
  );
}

export default SearchBar;
