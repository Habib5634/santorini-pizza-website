import React from "react";
import Header from "../pages/Header";
import HomePage from "../pages/HomePage";
import Popularrecipies from "../pages/Popularrecipies/Popularrecipies";
import OrderNow from "../pages/OrderNow";
import FollowUs from "../pages/FollowUs";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <>
      <HomePage />
      <Popularrecipies />
      <OrderNow />
      <FollowUs />
      <Footer />
    </>
  );
};

export default Layout;
