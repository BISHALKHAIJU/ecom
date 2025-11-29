import React from "react";

import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeCart } =
    useCartContext();

  if (cart.length === 0) {
    return <div>Your Cart Is Empty</div>;
  }

  return (
    <>
      <div>
        {cart.map((c) => (
          <div className="flex border border-black py-4 lg:m-4 m-1 sm:gap-2  lg:mt-8 md:mt-6 sm:mt-2 mt-1">
          {/* image */}
            <div><img className="w-40 sm:w-60 md:w-80 lg:w-80 lg:px-4 px-2 " src={c.image} alt="" /></div>
            <div className=" mt-4 h-10 w-[30%]">
              <p className="text-sm sm:text-2xl lg:text-3xl font-medium">{c.name}</p>
              <div className="flex-row  sm:flex-1 md:flex lg:flex lg:justify-between lg:h-8 lg:w-200  md:mt-2  ">
                <div className="text-lg sm:text-xl lg:text-3xl">Quantity</div>
                <div className="md:px-2"><button onClick={()=>increaseQuantity(c.id)} className="px-2 cursor-pointer border-gray-500 border rounded-sm">+</button>
                <span className="px-2">{c.quantity}</span>
                <button onClick={()=>decreaseQuantity(c.id)} className="px-2 cursor-pointer border border-gray-500 rounded-sm">-</button></div>
              </div>
            <div className="flex-row mt-2 sm:flex-1 md:flex lg:flex md:w-197 w-40  justify-between">
              <p className="text-xl font-normal">{c.price}$ × {c.quantity} = {c.price * c.quantity}$</p>
              <button onClick={()=>removeCart(c.id)} className="bg-red-300 text-center px-1 rounded-sm">Remove</button>
              </div>
            

            </div>
              
              </div>    
        ))}
      </div>
    </>
  );
};

export default CartPage;
