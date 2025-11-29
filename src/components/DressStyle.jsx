import React from 'react'

const DressStyle = () => {
  // const images=[
  //   {
  //     id:1,
  //   image:"/dressStyle/Frame 61.png",
  //   alt:"dressStyle1",
  // },
  // {
  //     id:2,
  //   image:"/dressStyle/Frame 62.png",
  //   alt:"dressStyle2",
  // },
  // {
  //     id:3,
  //   image:"/dressStyle/Frame 63.png",
  //   alt:"dressStyle3",
  // },
  // {
  //     id:4,
  //   image:"/dressStyle/Frame 64.png",
  //   alt:"dressStyle4",
  // }

  // ]

  return (
    <>
          <div className=" bg-[#F0EEED] mx-10 sm:mx-12 md:mx-20 mt-8 py-12  rounded-3xl"> 
      <h1 className='font-bold text-center text-3xl sm:text-4xl md:5xl '>BROWSE BY DRESS STYLE</h1>
      <div className='flex-1 justify-center items-center sm:flex-2 sm:justify-center sm:items-center md:flex md:justify-center md:items-center mt-8'>
        <div className='px-2 py-2 md:px-2 '>
          <img className='w-full sm:w-full md:w-full object-cover' src="/dressStyle/Frame 61.png" alt="desc" />
        </div>
        <div className='px-2'>
          <img className='object-cover ' src="/dressStyle/Frame 62.png" alt="desc" />
        </div>
    </div>
        <div className="flex-1 justify-center items-center sm:flex-2 sm:justify-center sm:items-center md:flex md:justify-center md:items-center mt-2 ">
          <div className='px-2'>
          <img className='object-cover' src="/dressStyle/Frame 63.png" alt="desc" />
        </div>
        <div className=' px-2 py-2 md:py-2'>
          <img className='w-full sm:w-full md:w-full object-cover' src="/dressStyle/Frame 64.png" alt="desc" />
        </div>
        </div>
  </div>
  </>
  )
}

export default DressStyle
