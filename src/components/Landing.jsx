import React from "react";
import models from "../assets/models.jpg";

const Landing = () => {
  return (
    <>
      <div className="w-screen overflow-hidden h-full lg:h-[88vh] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-[#F2F0F1] text-start px-8 py-30">
            <p className="lg:text-6xl font-bold lg:py-3 text-4xl py-3">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </p>
            <div>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <div className="flex justify-center items-center ">
              <button className="bg-black text-white rounded-3xl lg:w-[30vh] w-full md:text-3xl px-5 py-1 mt-8 ">Shop Now</button>
              </div>
              <div className="flex flex-row justify-between items-center py-8 mt-4 lg:space-x-2 md:space-x-2 space-x-2 font-semibold text-center  ">
                <div  className="border-1 py-1  lg:px-2">
                  <h1>200+</h1>
                  <p>International brands</p>
                </div>
                <div className="border-1 py-1 lg:px-2">
                  <h1>2,000+</h1>
                  <p>High-Quality Products</p>
                </div>
                <div className="border-1 py-1 lg:px-2">
                  <h1>30,000+</h1>
                  <p>Happy Customers</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={models}
              className="w-full h-full max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
