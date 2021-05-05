import React from "react";
import Product from "../Product";
import { ProductsContainer } from "./ProductsElements";

function ProductCategories() {
  return (
    <ProductsContainer>
      <Product title="Vegetables" category="vegetables" />
      <Product title="Dairy" category="dairy" />
      <Product title="Fruits" category="fruits" />
      <Product title="Groceries" category="groceries" />
      <Product title="Spices" category="spices" />
    </ProductsContainer>
  );
}

export default ProductCategories;
