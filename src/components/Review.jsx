import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


const Review = () => {
  const reviews = [
    {
      icon: "★★★★★",
      name: "Sarah M.",
      description:
        "I'm blown away by the quality and style of the clothes I receivedfrom Shop.co. From casual wear to elegant dresses, every piece.I have bought has exceeded my expectations. ",
    },
    {
      icon: "★★★★",
      name: "Alex k.",
      description:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      icon: "★★★★",
      name: "James L.",
      description:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      icon: "★★★★★",
      name: "Morris Ri.",
      description:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
      >
        <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    );
  };
const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <>
      
      <button
        onClick={onClick}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
      >
        <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      </>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };


  return (
    <>
      <div className="mt-10 ">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mx-10 mt-12">OUR HAPPY CUSTOMERS</h1>
        <div className="relative w-full max-w-5xl mx-auto ">
          <Slider {...settings}>
          {reviews.map((review) => (
            <div className="border-1 rounded-2xl border-gray-300">
              <div>
                <p className="text-yellow-400 text-xl sm:text-2xl md:text-3xl">
                  {review.icon}
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-normal">
                  {review.name}✅
                </p>
              </div>
              <div>
                <p>{review.description}</p>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Review;
