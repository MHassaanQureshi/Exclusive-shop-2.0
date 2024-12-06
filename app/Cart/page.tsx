"use client";

import React from "react";
import { useCart } from "../context/cartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="w-[90%] flex flex-col gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">Price: ${item.price}</p>
                <p className="text-gray-400 line-through">From: ${item.from}</p>
                <p className="text-yellow-500">⭐ {item.review} Reviews</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
