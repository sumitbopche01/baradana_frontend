import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductCategories from "../components/ProductCategories";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductCategories />
    </>
  );
}

export default Home;
