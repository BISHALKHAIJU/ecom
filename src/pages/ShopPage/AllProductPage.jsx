import React from "react";
import ProductCard from "./ProductCard";

const AllProductPage = () => {
  const data = [
    {
      id: "a1",
      name: "t-shirt",
      price: 233,
      image: "/menDress/formal1.png",
      rating: "★★★☆☆",
      rate: "3/5",
      
    },
    {
      id: "a2",
      name: "t-shirt",
      price: 233,
      image: "/menDress/tshirts3.png",
      rating: "★★★★☆",
      rate: "4/5",
      
    },
    {
      id: "a3",
      name: "t-shirt",
      price: 233,
      image: "/menDress/tshirts4.png",
      rating: "★★★★★",
      rate: "5/5",
      actualPrice: 100,
      discount: "-30%",
    },
    {
      id: "a4",
      name: "t-shirt",
      price: 233,
      image: "/menDress/tshirts2.png",
      rating: "★★☆☆☆",
      rate: "3/5",
      
    },
  
  ];
  const datas=[{
    id: "a5",
      name:"FULL SLEVE SHIRT",
      price: 233,
      image: "/newArrivals/Frame 34.png",
      rating: "★★★☆☆",
      rate: "3/5",
      
    },
    {
      id: "a6",
      name: "PLAIN HALF T-SHIRT",
      price: 233,
      image: "/newArrivals/Frame 32.png",
      rating: "★★★★★",
      rate: "5/5",
      
    },
    {
      id: "a7",
      name: "JEANS HALF PANT",
      price: 233,
      image: "/topSellings/Frame 42.png",
      rating: "★★★★☆",
      rate: "4/5",
      
    },
    {
      id: "a8",
      name: "FROMAL PANT",
      price: 233,
      image: "/topSellings/Frame 43.png",
      rating: "★★★★☆",
      rate: "4/5",
      

  }]

  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium  py-6">All Products</h1>
        <ProductCard product={data} />
        <ProductCard product={datas} />
      </div>
    </>
  );
};
export default AllProductPage;
