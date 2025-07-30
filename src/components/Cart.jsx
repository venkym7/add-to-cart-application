import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState(
    Object.fromEntries(products.map((item) => [item.id, item.quantity || 1]))
  );

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Number(value) });
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * (quantities[product.id] || 1),
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
      {products.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center space-x-6 border-b pb-4"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-700 mb-2">
                  Price: ${product.price}
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={quantities[product.id]}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(product.id, e.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1 w-16"
                  />
                 
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="bg-red-600 hover:bg-red-600 text-black px-3 py-1 rounded text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-right text-lg font-semibold mt-4">
            Total : ${total.toFixed(2)}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
            >
              Back to Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
