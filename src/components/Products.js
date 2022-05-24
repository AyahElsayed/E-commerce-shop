import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import products from '../data'
import Product from './product/Product'
// import { Link } from "react-router-dom";
import './style.scss'
import NavBar from './navbar/Navbar';
import { useState } from 'react';

const Products = ({ productsData }) => {

  const [itemsCount, setItemsCount] = useState(0)

  const addToCart = () => {
    setItemsCount(itemsCount + 1)
  }
    console.log('data from products', productsData)

  return (
    <>
    <NavBar itemsCount={itemsCount}/>
      <Container fluid className='productsContainer'>
        <div className='title'>
          Welcome to our Ammazing shop
        </div>
        <Row className='justify-content-center'>
          {productsData.map((product) => (
            <Col sm={12} md={5} lg={3} className="m-2" key={product.id} >
              <Product itemdata={product}  addToCart={addToCart}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Products