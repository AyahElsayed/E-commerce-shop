import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from '../data'
import Product from './product/Product'
import { Link } from "react-router-dom";

const Products = () => {

  return (
    <Container fluid>
      <div className='title'>
        Welcome to our Ammazing shop
        <Link to="/cart">Cart</Link>
      </div>
      <Row className='justify-content-center'>
        {products.map((product) => (
          <Col sm={12} md={5} lg={3} className="  m-2" key={product.id}>
            {/* {product.name} */}
            <Product product={product} />
          </Col>
        ))}
      </Row>

    </Container>
  )
}

export default Products