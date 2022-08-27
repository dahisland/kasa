import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LodgingList from "../components/LodgingList";
import Slogan from "../components/Slogan";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Slogan
        slogan="Chez vous, partout et ailleurs"
        background="slogan--sea"
      />
      <main className="homepage_main">
        <LodgingList />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
