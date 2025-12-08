import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();

  return (
    <>
      <div className="container mx-auto px-4  py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-6 gap-6">
          {product.map((item, id) => (
            <div
              className="text-start px-4 text-sm sm:text-md md:text-xl py-5"
              key={id}
            >
              <Link to={`/product/${item.id}`}>
                <img
                  className="w-full h-auto rounded-md object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </Link>

              <div className="py-2 font-bold">
                <p>{item.name}</p>
              </div>

              <div className="flex gap-4 font-medium">
                <p>{item.rating}</p>
                <p>{item.rate}</p>
              </div>

              <div className="flex gap-4">
                <p>{item.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
