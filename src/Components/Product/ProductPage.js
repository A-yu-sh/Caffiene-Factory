import React from "react";
import NavBar from "../Navbar";
import ProductCards from "./ProductCards";
import ProductCardsCopy from "./ProductsCardsCopy";
import Container from "../Container";

const ProductPage = () => {
  return (
    <div>
      <Container>
        <NavBar />
      </Container>
      <ProductCards />
      {/* <ProductCardsCopy /> */}
    </div>
  );
};

export default ProductPage;
