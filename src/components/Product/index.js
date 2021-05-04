import React, { useEffect, useState } from "react";
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
import ClusterBeans from "../../images/clusterBeans.png";
import BabyCorn from "../../images/babyCorn.png";
import Ginger from "../../images/ginger.png";
import PumpkinYellow from "../../images/pumpkinYellow.png";

import { Button } from "@material-ui/core";
import { db } from "../../firebase";

// let productsList = [
//   {
//     title: "Palak (Spinach) Leafy",
//     imgUrl: "https://baradana-images.s3.ap-south-1.amazonaws.com/palak.png",
//     category: "vegetables",
//     subCategory: "seasonal",
//     quantity: 500,
//     unit: "gm",
//     price: 40,
//     currencySymbol: "₹",
//     from: "",
//     certifiedOrganic: false,
//     chemicalResidueFree: true,
//   },
// ];

const Product = ({ title }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("use effect called");
    db.collection("products")
      .where("category", "==", "vegetables")
      .onSnapshot((snapshot) => {
        setProductList(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
        console.log("got data");
        console.log(productList);
      });
  }, []);

  const addData = (e) => {
    console.log("add data");
    e.preventDefault();
    let d = {
      title: "Palak (Spinach) Leafy",
      imgUrl: "https://baradana-images.s3.ap-south-1.amazonaws.com/palak.png",
      category: "vegetables",
      subCategory: "seasonal",
      quantity: 500,
      unit: "gm",
      price: 40,
      currencySymbol: "₹",
      from: "",
      certifiedOrganic: false,
      chemicalResidueFree: true,
    };

    db.collection("products").add(d);
  };

  return (
    <CategoryContainer>
      <Heading>
        <p>{title}</p>
        <hr />
      </Heading>
      <DataContainer>
        {productList.map((prod) => (
          <CardContainer key={prod.id}>
            <ProductImg>
              <img src={prod.data.imgUrl} alt="" />
            </ProductImg>
            <ProductTitle>{prod.data.title}</ProductTitle>
            <ProductPrice>
              Price:{" "}
              <strong>
                {prod.data.currencySymbol}
                {prod.data.price}
              </strong>
            </ProductPrice>
            <ProductUnits>
              Units:{" "}
              <strong>
                {prod.data.quantity} {prod.data.unit}
              </strong>
            </ProductUnits>

            <Button onClick={addData}>Add To Cart</Button>
          </CardContainer>
        ))}
      </DataContainer>
    </CategoryContainer>
  );
};

export default Product;
