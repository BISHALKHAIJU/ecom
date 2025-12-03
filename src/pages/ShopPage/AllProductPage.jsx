import React from "react";
import ProductCard from "./ProductCard";
import data from "../../data/data";

const AllProductPage = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium  py-6">
          All Products
        </h1>
        <ProductCard product={data} />
      </div>
    </>
  );
};
export default AllProductPage;
