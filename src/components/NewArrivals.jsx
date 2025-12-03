import React from "react";
import ProductCard from "../pages/ShopPage/ProductCard";

const NewArrivals = () => {
  const data = [
    {
      id: 1,
      image: "/newArrivals/Frame 32.png",
      alt: "newArrival 1",
      desc: "T-SHIRT WITH TAPE DETAILS",
      rating: "★★★★☆",
      rate: "4/5",
      price: 50,
    },
    {
      id: 2,
      image: "/newArrivals/Frame 33.png",
      alt: "newArrival 2",
      desc: "SKINNY FIT JEANS",
      rating: "★★★☆☆",
      rate: "3/5",
      price: 100,
    },
    {
      id: 3,
      image: "/newArrivals/Frame 34.png",
      alt: "newArrival 3",
      desc: "CHECKERED SHIRT",
      rating: "★★★★★",
      rate: "5/5",
      price: 70,
    },
    {
      id: 4,
      image: "/newArrivals/Frame 38.png",
      alt: "newArrival 4",
      desc: "SLEEVE STRIPED T-SHIRT",
      rating: "★★★★☆",
      rate: "4/5",
      price: 90,
    },
  ];

  return (
    <>
      <div id="newArrivals">
        <h1 className="text-center  py-6 font-bold text-3xl sm:text-4xl md:text-5xl">New Arrivals</h1>
        <ProductCard product={data} />
      </div>
      <div className="flex justify-center">
          <button className="border rounded-2xl w-20 items-center ">View All</button>
        </div>
        <div className="border-t border-gray-500 mt-3 mx-auto w-[89%]"></div>
    </>
  );
};

export default NewArrivals;
