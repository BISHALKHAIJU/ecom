import React from "react";
import ProductCard from "./ProductCard";

import dataMen from "../../data/dataMen";

const MenCategoryPage = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium  py-6">
          Men's Collections
        </h1>
        <ProductCard product={dataMen} />
      </div>
    </>
  );
};

export default MenCategoryPage;
