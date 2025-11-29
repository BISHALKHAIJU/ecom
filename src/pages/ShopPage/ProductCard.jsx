import React from "react";
import { useCartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();

  return (
    <>
      <div className="container mx- auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 gap-6">
          {product.map((item, index) => (
            <div
              className="text-start px-4 text-sm sm:text-md md:text-xl py-5"
              key={index}
            >
              <img
                className="w-full h-85 rounded-md object-cover"
                src={item.image}
                alt={item.name}
              />
              <div className="py-2 font-bold">
                <p>{item.name}</p>
              </div>

              <div className="flex gap-4 font-medium">
                <p>{item.rating}</p>
                <p>{item.rate}</p>
              </div>

              <div className="flex gap-4">
                <p>${item.price}</p>
                
              </div>

              <div className="flex py-2 justify-center">
                <button
                  onClick={() => addToCart(item)}
                  className="text-white bg-black  rounded-2xl py-1 px-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
