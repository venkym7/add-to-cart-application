import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { setproducts } from "../redux/productSlice";

function ProductCard() {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    searchQuery,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setproducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
          <strong className="font-bold">Loading...</strong>
          <span className="ml-2">Fetching products from server.</span>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error!</strong>
          <span className="ml-2">Something went wrong. Try again later.</span>
        </div>
      </div>
    );
  }

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-900">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 text-lg mt-10">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
