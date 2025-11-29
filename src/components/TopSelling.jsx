import React from "react";

const TopSelling = () => {
  const images = [
    {
      id: 1,
      image: "/topSellings/Frame 40.png",
      alt: "topSelling 1",
      desc: "VERTICAL STRIPED SHIRT",
      rating: "★★★★★",
      rate: "5/5",
      price: "212$",
      actualPrice: "232$",
      discount: "-20%",
    },
    {
      id: 2,
      image: "/topSellings/Frame 41.png",
      alt: "topSelling 2",
      desc: "COURAGE GRAPHIC T-SHIRT",
      rating: "★★★★☆",
      rate: "4/5",
      price: "100$ ",
      
    },
    {
      id: 3,
      image: "/topSellings/Frame 42.png",
      alt: "topSelling 3",
      desc: "LOOSE FIT BERMUDA SHORTS",
      rating: "★★★☆☆",
      rate: "3/5",
      price: "70$",
      
    },
    {
      id: 4,
      image: "/topSellings/Frame 43.png",
      alt: "topSelling 4",
      desc: "FADED SKINNY JEANS",
      rating: "★★★★☆",
      rate: "4/5",
      price: "90$",
    },
  ];

  return (
    <>
      <h1 className="text-center py-6 font-bold text-5xl">Top Selling</h1>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {images.map((info)=>( 
          <div key={info.id} className="text-start px-4 text-sm sm:text-md md:text-xl py-5 ">
            {/* <img src="/newArrivals/Frame 32.png" alt="desc" /> */}
            <img className="w-full  sm:w-full sm:h-70 md:w-full md:h-60  lg:w-full lg:h-78 object-cover" src={info.image} alt="{info.alt}"/>
            <div className="py-2 font-bold">
              <p>{info.desc}</p>
            </div>
            <div className="flex gap-4 font-medium">
              <p>{info.rating}....</p>
              <p>{info.rate}</p>
            </div>
            <div className="flex gap-4 py-2 font-medium">
              <p>{info.price}</p>
              <p className="line-through text-gray-500 italic">{info.actualPrice}</p>
              <div className="py-1">
                    <p className=" bg-red-200 text-red-500 text-center rounded-xl w-[6vh]">{info.discount}</p>
              </div>
            </div>
            
            </div>
            
        ))}

        </div>
        <div className="flex justify-center">
          <button className="border rounded-2xl w-20 items-center ">View All</button>
        </div>
      </div>
      
    </>
  );
};

export default TopSelling;
