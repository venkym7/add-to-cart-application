import React, { useState, useEffect } from "react";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto text-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition-shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-900">
              {product.title}
            </h2>
            <p className="text-gray-600 mt-1 mb-4">${product.price}</p>
            <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
