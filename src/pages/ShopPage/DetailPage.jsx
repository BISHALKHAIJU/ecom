import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ReviewSectionPage from "./ReviewSectionPage";

const DetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCartContext();

  const product = products.find((p) => p.id === id);

  const colors = ["white", "black", "blue"];
  const sizes = ["S", "M", "L", "Xl"];

  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("S");

  // NEW: local quantity state
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  // NEW: local quantity handlers
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // NEW: Add to cart with quantity, color, size
  const handleAddToCart = () => {
    if (quantity <= 0) {
    alert("Please select the quantity");
    return; // Stop execution - don't add to cart
  }
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
      
    });
    alert("Added to Cart")
  };

  return (
    <>
      <div className="grid  md:max-w-5xl md:mx-auto px-4 gap-10 mt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-5xl md:mx-auto px-4 gap-16 mt-7">
        <div className="flex justify-center">
          <img
            className="w-full max-w-md object-cover"
            src={product.image}
            alt=""
          />
        </div>

        <div className="mt-4">

          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-center md:text-start">
            {product.name}
          </h1>

          <div className="flex gap-4 justify-center md:justify-start items-center">
            <h2>{product.rating}</h2>
            <h3>{product.rate}</h3>
          </div>

          <h1 className="text-center md:text-start">{product.price}$</h1>
          <p className="text-center md:text-start">{product.description}</p>

          <div className="border-t border-gray-500 mt-3 mx-auto"></div>

          {/* COLOR */}
          <div className="mt-3 text-center md:text-start">
            <h1>Select Color</h1>
            <div className="space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 mt-2 h-8 rounded-3xl border-3 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-500 mt-3 mx-auto"></div>

          {/* SIZE */}
          <div className="mt-3 text-center md:text-start">
            <h1>Select Size</h1>
            <div className="space-x-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-500 mt-3 mx-auto "></div>

          {/* QUANTITY */}
          <div className="mt-3 text-center md:text-start">
            <h1>Quantity</h1>
            <div className="space-x-3 mt-2">
              <button
                className="border border-gray-500 rounded-sm text-xl w-8 h-8"
                onClick={decrease}
              >
                -
              </button>
              
              <span className="px-3">{quantity}</span>

              <button
                className="border border-gray-500 rounded-sm text-xl w-8 h-8"
                onClick={increase}
              >
                +
              </button>

            </div>
          </div>

          {/* ADD TO CART */}
          <div className="flex justify-center items-center">
            <button
              className="bg-black text-white px-4 py-2 rounded-md mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

        </div>
        </div>
                  <div><ReviewSectionPage /></div>
        </div>
        
       {/* {Review Section} */}

        
    </>
  );
};

export default DetailPage;
