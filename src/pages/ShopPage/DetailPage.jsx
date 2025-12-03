import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import products from "../../data/products";

const DetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCartContext();

  const product = products.find((p) => p.id === id);

  const colors = ["white", "black", "blue"];


  const [selectedColor, setSelectedColor] = useState("white");
  

  if (!product) return <h2>Product not found</h2>;

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="justify-end ">
          <img className="w-full ml-38 px-38 py-4" src={product.image} alt="" />
        </div>

        <div className="p-8 justify-start mt-2">
          <p>{product.name}</p>
          <div className="flex gap-4">
            <p>{product.rating}</p>
            <p>{product.rate}</p>
          </div>
          <div>
            <p>{product.price}$</p>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
          <div className="border-t border-gray-500 mt-3 mx-auto "></div>
          <div className="">
            <h3 className="text-xl text-gray-800 mb-2 mt-2">Select color</h3>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-3xl border-2 
                ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-500 mt-3 mx-auto "></div>

          
        </div>
      </div>
    </>
  );
};

export default DetailPage;
