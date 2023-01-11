import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./MainContainer";
import Header from "./Header";
import ProductDetails from "./Product/productDetails";
function LandingPage() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
      </Routes>
    </>
  );
}
export default LandingPage;
