import React from "react";
import ProductCard from "./ProductCard";
import dataWomen from "../../data/dataWomen";

const WomenCategoryPage = () => {

  return (
    <>
      <div>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium py-6">
          Women's Collections
        </h1>
        <ProductCard product={dataWomen} />
      </div>
    </>
  );
};

export default WomenCategoryPage;
