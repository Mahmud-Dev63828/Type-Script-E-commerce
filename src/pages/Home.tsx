import React from "react";
import Header from "../components/HomeComponents/Header/Index";
import TopNav from "../components/HomeComponents/TopNav/Index";
import Menu from "../components/HomeComponents/Menu/Index";
import Category from "../components/HomeComponents/Category/Index";
import Banner from "../components/HomeComponents/Banner/Index";
import Features from "../components/HomeComponents/Features/Index";
const Home = () => {
  return (
    <div>
      <Header />
      <TopNav />
      <Menu />
      <Category />
      <Banner />
      <Features />
    </div>
  );
};

export default Home;
