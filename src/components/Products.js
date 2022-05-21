import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from '../data'


const Products = () => {

  return (
    <Container fluid>
      <Row className='justify-content-center'>
        {products.map((product) => (
          <Col sm={12} md={5} lg={3} className="bg-primary  m-2" key={product.id}>
            {product.name}
          </Col>
        ))}
      </Row>

    </Container>
  )
}

export default Products