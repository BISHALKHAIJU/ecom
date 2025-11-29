import React from "react";
import Landing from "../components/Landing";
import Branding from "../components/Branding";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import DressStyle from "../components/DressStyle";
import Review from "../components/Review";



const HomePage = () => {
  return (
    <>
      <Landing />
      <Branding />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Review />
      
    </>
  );
};

export default HomePage;
