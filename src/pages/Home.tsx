import React from "react";
import Header from "../components/HomeComponents/Header/Index";
import TopNav from "../components/HomeComponents/TopNav/Index";
import Menu from "../components/HomeComponents/Menu/Index";
import Category from "../components/HomeComponents/Category/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <TopNav />
      <Menu />
      <Category />
    </div>
  );
};

export default Home;
