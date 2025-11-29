import React from "react";
import ProductCard from "./ProductCard";

const WomenCategoryPage = () => {
  const formalDress = [
    {
      id: "w1",
      name: "WOMEN FORMAL SHIRT",
      image: "/womenDress/Rectangle 14.png",
      rating: "★★★★★",
      rate: "5/5",
      price: 70,
      
    },
    {
      id: "w2",
      name: "WOMEN FORMAL SHIRT",
      image: "/womenDress/Rectangle 15.png",
      rating: "★★★☆☆",
      rate: "3/5",
      price: 70,
      actualPrice: 100,
      discount: "-30%",
    },
    {
      id: "w3",
      name: "BLACK PRINTED T-SHIRT",
      image: "/womenDress/tshirts3.png",
      rating: "★★★★★",
      rate: "5/5",
      price: 70,
      actualPrice: 100,
      discount: "-30%",
    },
    {
      id: "w4",
      name: "FORMAL T-SHIRT",
      image: "/womenDress/formal1.png",
      rating: "★★★★☆",
      rate: "4/5",
      price: 70,
      actualPrice: 100,
      discount: "-30%",
    },
    {
      id: "w5",
      name: "FORMAL PANTS",
      image: "/womenDress/Rectangle 13.png",
      rating: "★★★☆☆",
      rate: "3/5",
      price: 70,
      actualPrice: 100,
      discount: "-30%",
    },
    {
      id: "w6",
      name: "SKINNY JEANS",
      image: "/womenDress/Frame 71.png",
      rating: "★★★★☆",
      rate: "4/5",
      price: 70,
      actualPrice: 100,
      discount: "-30%",
    },
    {
      id: "w7",
      name: "CARGO PANTS",
      image: "/womenDress/Rectangle 9.png",
      rating: "★★★★★",
      rate: "5/5",
      price: 70,
      
    },
    {
      id: "w8",
      name: "SKINNY JEANS",
      image: "/womenDress/Frame 33.png",
      rating: "★★★☆☆",
      rate: "3/5",
      price: 70,
      
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium py-6">
          Women's Collections
        </h1>
        <ProductCard product={formalDress} />
      </div>
    </>
  );
};

export default WomenCategoryPage;
