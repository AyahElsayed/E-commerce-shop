import React from "react";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import { products } from "./services/products";

export const Home = () => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    Promise.all([products()]).then(res => {
      console.log('products =>', res[0].data.data);
      setProductsData(res[0].data.data)
    }).catch((error) => {
      console.log('products error', error);
    });
  }, []);

  return (
    <div>
      <Products productsData={productsData}/>
    </div>
  )
};