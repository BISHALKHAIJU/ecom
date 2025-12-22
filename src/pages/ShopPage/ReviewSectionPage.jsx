import React, { useState } from "react";
import {FaStar,FaRegStar} from "react-icons/fa"

const ReviewSectionPage = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      <section className="max-w-5xl mx-auto px-4">
        <div className="mt-4 text:2xl sm:text-3xl md:text-4xl font-bold ">
          <h2 >Customer Review</h2>
        </div>

        {/* {Review Form}  */}
        <div className=" border-1 p-2 mt-4 rounded-xl">
          <div className="flex  gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span  className="text-xl sm:text-3xl md:text-4xl"
                key={star}
                onClick={() => setRating(star)}
                // className={` text-2xl cursor-pointer ${
                //   star <= rating
                //     ? "text-yellow-400"
                //     : "text-gray-300"
                // }`}
              >
                {star <= rating ? <FaStar color="#fbbf24" /> : <FaRegStar color="#d1d5db" />}
              </span>
            ))}
          </div> 
            <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium">Your Review</p>
            <textarea placeholder="Tell us what you think about this product..." className="  resize-none w-full  p-2  border border-gray-300 rounded-md focus:outline-none "></textarea>
            <button className="bg-black text-white p-2 border rounded-xl cursor-pointer">Submit Review</button>
          
          <div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl bg-gray-100 flex flex-col items-center text-center mt-8 p-4 md:p-8">
          <p className="text-3xl sm:text-4xl md:text-5xl">
            <FaRegStar color="#d1d5db" />
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mt-2">
            No reviews yet
          </p>
          <p className="text-lg sm:text-xl md:text-2xl">
            Be the First to share Your thoughts!
          </p>
        </div>
      </section>
    </>
  );
};

export default ReviewSectionPage;
