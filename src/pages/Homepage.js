import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import Slogan from "../components/Slogan";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Slogan />
      <HomeMain />
      <Footer />
    </div>
  );
};

export default Homepage;
