import React from 'react'
import ProductCard from './ProductCard'

const MenCategoryPage = () => {


  const products=[{
        id: "m1",
      name: "GREEN FORMAL T-SHIRT",
      image: "/menDress/tshirts1.png",
      rating: "★★★★★",
      rate: "5/5",
      price: 70,
      
    },
    {
      id: "m2",
      name: "PRINTED T-SHIRT",
      image: "/menDress/tshirts2.png",
      rating: "★★★★☆",
      rate: "4/5",
      price: 70,
      
    },
    {
      id: "m3",
      name: "BLACK PRINTED T-SHIRT",
      image: "/menDress/tshirts3.png",
      rating: "★★★☆☆",
      rate: "3/5",
      price: 70,
      
    },
    {
      id: "m4",
      name: "FORMAL T-SHIRT",
      image: "/menDress/Frame 34.png",
      rating: "★★★★☆",
      rate: "4/5",
      price: 70,
      
    },
    {
      id: "m5",
      name: "pants",
      image: "/menDress/Rectangle 12.png",
      rating: "★★★★★",
      rate: "5/5",
      price: 70,
      
    },
    {
      id: "m6",
      name: "pants",
      image: "/menDress/Rectangle 7.png",
      rating: "★★★★☆",
      rate: "4/5",
      price: 70,
      
    },
    {
      id: "m7",
      name: "pants",
      image: "/menDress/Rectangle 8.png",
      rating: "★★★★☆",
      rate: "4/5",
      price: 70,
      
    },
    {
      id: "m8",
      name: "pants",
      image: "/menDress/Rectangle 11.png",
      rating: "★★★☆☆",
      rate: "3/5",
      price: 70,
    

  }]
  return (
    <>
      <div>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-medium  py-6'>Men's Collections</h1>
        <ProductCard product={products}/>
      </div>
    </>
  )
}

export default MenCategoryPage
