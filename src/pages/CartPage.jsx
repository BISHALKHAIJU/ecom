import React from "react";

import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeCart, clearCart } =
    useCartContext();

  if (cart.length === 0) {
    return (
      <div className="text-3xl font-medium text-center">
        Your Cart is Empty....
      </div>
    );
  }

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    clearCart();
    alert("Cart Cleared!");
  };

  return (
    <>
      <div>
        {cart.map((c) => (
          <div className="flex border border-black py-4 lg:m-4 m-1 sm:gap-2  lg:mt-8 md:mt-6 sm:mt-2 mt-1">
            {/* image */}
            <div>
              <img
                className="w-40 sm:w-60 md:w-80 lg:w-80 lg:px-4 px-2 "
                src={c.image}
                alt=""
              />
            </div>
            <div className=" mt-4 h-10 w-[30%]">
              <p className="text-sm sm:text-2xl lg:text-3xl font-bold">
                {c.name}
              </p>
              <div className="flex-row sm:flex-1 md:flex lg:flex lg:justify-between lg:h-8 lg:w-200  md:mt-2  ">
                <div className="text-lg sm:text-xl lg:text-2xl">Quantity</div>
                <div className="md:px-2">
                  <button
                    onClick={() => decreaseQuantity(c.id)}
                    className="px-2 cursor-pointer border border-gray-500 rounded-sm"
                  >
                    -
                  </button>
                  <span className="px-2">{c.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(c.id)}
                    className="px-2 cursor-pointer border-gray-500 border rounded-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-2 px-2 text-gray-500">
                <p>
                  {c.selectedColor}/{c.selectedSize}
                </p>
              </div>
              <div className="flex-row mt-2 sm:flex-1 md:flex lg:flex md:w-197 w-40  justify-between">
                <p className="text-xl font-normal">
                  {c.price}$ × {c.quantity} = {c.price * c.quantity}$
                </p>

                <button
                  onClick={() => removeCart(c.id)}
                  className="bg-red-300 text-center cursor-pointer px-1 rounded-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="px-5 flex items-center justify-between ">
          <h1 className="text-start">Total Price={grandTotal}$</h1>
          <div className="flex gap-2">
            <button
              onClick={handleClearCart}
              className="bg-gray-400 rounded-xl cursor-pointer p-1"
            >
              Clear Cart
            </button>
            <button className="bg-black text-white cursor-pointer rounded-xl p-1">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
