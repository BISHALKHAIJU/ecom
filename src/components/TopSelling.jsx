import React from "react";
import ProductCard from "../pages/ShopPage/ProductCard";

const TopSelling = () => {
  const data = [
    {
      id: 1,
      image: "/topSellings/Frame 40.png",
      alt: "topSelling 1",
      desc: "VERTICAL STRIPED SHIRT",
      rating: "★★★★★",
      rate: "5/5",
      price: 212,
      
    },
    {
      id: 2,
      image: "/topSellings/Frame 41.png",
      alt: "topSelling 2",
      desc: "COURAGE GRAPHIC T-SHIRT",
      rating: "★★★★☆",
      rate: "4/5",
      price: 100,
      
    },
    {
      id: 3,
      image: "/topSellings/Frame 42.png",
      alt: "topSelling 3",
      desc: "LOOSE FIT BERMUDA SHORTS",
      rating: "★★★☆☆",
      rate: "3/5",
      price: 70,
      
    },
    {
      id: 4,
      image: "/topSellings/Frame 43.png",
      alt: "topSelling 4",
      desc: "FADED SKINNY JEANS",
      rating: "★★★★☆",
      rate: "4/5",
      price: 90,
    },
  ];

  return (
    <>
      <div id="topSelling">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold py-6">Top Sellings</h1>
        <ProductCard product={data}/>
      </div>
        <div className="flex justify-center">
          <button className="border rounded-2xl w-20 items-center ">View All</button>
        </div>
        <div className="border-t border-gray-500 mt-3 mx-auto w-[87%]"></div>

    </>
  );
};

export default TopSelling;
