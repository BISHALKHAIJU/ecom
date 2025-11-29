import React from "react";

const NewArrivals = () => {
  const pictures = [
    {
      id: 1,
      image: "/newArrivals/Frame 32.png",
      alt: "newArrival 1",
      desc: "T-SHIRT WITH TAPE DETAILS",
      rating: "★★★★☆",
      rate: "4/5",
      price: "50$",
    },
    {
      id: 2,
      image: "/newArrivals/Frame 33.png",
      alt: "newArrival 2",
      desc: "SKINNY FIT JEANS",
      rating: "★★★☆☆",
      rate: "3/5",
      price: "100$ ",
      actualPrice: "120$",
      discount: "-20%",
    },
    {
      id: 3,
      image: "/newArrivals/Frame 34.png",
      alt: "newArrival 3",
      desc: "CHECKERED SHIRT",
      rating: "★★★★★",
      rate: "5/5",
      price: "70$",
      actualPrice: "100$",
      discount: "-30%",
    },
    {
      id: 4,
      image: "/newArrivals/Frame 38.png",
      alt: "newArrival 4",
      desc: "SLEEVE STRIPED T-SHIRT",
      rating: "★★★★☆",
      rate: "4/5",
      price: "90$",
    },
  ];

  return (
    <>
      <h1 className="text-center py-6 font-bold text-3xl sm:text-4xl md:text-5xl">New Arrivals</h1>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {pictures.map((info)=>( 
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
      <div className="border-t border-gray-500  mx-auto w-[87%]"></div>
    </>
  );
};

export default NewArrivals;
