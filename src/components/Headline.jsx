import React from "react";
import { Link } from "react-router-dom";

const Headline = () => {
  return (
    <>
      <div className="flex justify-center items-center py-2 w-screen bg-black text-white  text-center  sm:w-screen text-xl">
        <div>
          <p className="">
            Sign Up now and get 20% off on Your First order.
            <Link className="text-2xl font-bold underline" to="/signup">
              SignUp Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Headline;
