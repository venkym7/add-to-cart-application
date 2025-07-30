import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";
import ProductListPage from "./pages/ProductListPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<ProductCard />} />
          <Route path="/ProductListPage" element={<ProductListPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/SearchBar" element={<SearchBar />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
