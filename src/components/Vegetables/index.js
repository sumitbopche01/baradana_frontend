import React from "react";
import {
  DataContainer,
  CardContainer,
  ProductImg,
  CategoryContainer,
  Heading,
  ProductTitle,
  ProductPrice,
  ProductUnits,
} from "./ProductElements";
import Garlic from "../../images/garlic.png";
import { Button } from "@material-ui/core";

let vegetablesList = [
  {
    title: "Palak (Spinach) Leafy",
    imgUrl: Garlic,
    category: "vegetables",
    subCategory: "seasonal",
    quantity: 500,
    unit: "gm",
    price: 40,
    currencySymbol: "₹",
    from: "",
    certifiedOrganic: false,
    chemicalResidueFree: true,
  },
  {
    title: "Baby Corn | Box",
    imgUrl: Garlic,
    category: "vegetables",
    subCategory: "exotic",
    quantity: 1,
    unit: "pc",
    price: 79,
    currencySymbol: "₹",
    from: "",
    certifiedOrganic: false,
    chemicalResidueFree: true,
  },
  {
    title: "Cluster Beans | Gawar",
    imgUrl: Garlic,
    category: "vegetables",
    subCategory: "exotic",
    quantity: 250,
    unit: "gm",
    price: 250,
    currencySymbol: "₹",
    from: "",
    certifiedOrganic: false,
    chemicalResidueFree: true,
  },
  {
    title: "Ginger",
    imgUrl: Garlic,
    category: "vegetables",
    subCategory: "herbs",
    quantity: 250,
    unit: "gm",
    price: 1,
    currencySymbol: "₹",
    from: "",
    certifiedOrganic: false,
    chemicalResidueFree: true,
  },
  {
    title: "Pumpkin Green",
    imgUrl: Garlic,
    category: "vegetables",
    subCategory: "seasonal",
    quantity: 1,
    units: "kg",
    price: 80,
    currencySymbol: "₹",
    from: "",
    certifiedOrganic: false,
    chemicalResidueFree: true,
  },
  {
    title: "Garlic",
    imgUrl: Garlic,
    category: "vegetables",
    subCategory: "herbs",
    quantity: 250,
    unit: "gm",
    price: 30,
    currencySymbol: "₹",
    from: "",
    certifiedOrganic: false,
    chemicalResidueFree: true,
  },
];

function Vegetables() {
  return (
    <CategoryContainer>
      <Heading>
        <p>Vegetables</p>
        <hr />
      </Heading>
      <DataContainer>
        {vegetablesList.map((prod) => (
          <CardContainer key={prod.title}>
            <ProductImg>
              <img src={prod.imgUrl} alt="" />
            </ProductImg>
            <ProductTitle>{prod.title}</ProductTitle>
            <ProductPrice>
              Price:{" "}
              <strong>
                {prod.currencySymbol}
                {prod.price}
              </strong>
            </ProductPrice>
            <ProductUnits>
              Units:{" "}
              <strong>
                {prod.quantity} {prod.unit}
              </strong>
            </ProductUnits>

            <Button>Add To Cart</Button>
          </CardContainer>
        ))}
      </DataContainer>
    </CategoryContainer>
  );
}

export default Vegetables;
