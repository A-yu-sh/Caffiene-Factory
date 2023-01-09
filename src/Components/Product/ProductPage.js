import React from "react";
import NavBar from "../Navbar";
import ProductCards from "./ProductCards";
import ProductCardsCopy from "./ProductsCardsCopy";

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <ProductCards />
      {/* <ProductCardsCopy /> */}
    </div>
  );
};

export default ProductPage;
