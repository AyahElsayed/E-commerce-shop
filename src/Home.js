import React from "react";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import { products } from "./services/products";
import { SpinnerCircular } from 'spinners-react';
import './index.scss'

export const Home = () => {

  const [productsData, setProductsData] = useState([]);
  const [productsDataLoading, setProductsDataLoading] = useState(true);

  useEffect(() => {
    Promise.all([products()]).then(res => {
      console.log('products =>', res[0].data.data);
      setProductsData(res[0].data.data)
      setProductsDataLoading(false)
    }).catch((error) => {
      console.log('products error', error);
    });
  }, []);

  return (
    <div>
      {
        productsDataLoading ?
          <SpinnerCircular
            enabled={productsDataLoading}
            size={100}
            color='#4E4D53'
            secondaryColor={'#F4F4F4'}
            className="loder"
          />
          :
          <Products productsData={productsData} />
      }
      {/* <Products productsData={productsData} /> */}
    </div>
  )
};