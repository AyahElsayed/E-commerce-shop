import React from 'react'
import { Card ,Button} from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './style.scss'

const Product = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={product.image} />
      <Card.Body >
        <Card.Title className='d-flex justify-content-between' >
          {product.name}
          <span > {product.price}</span>
        </Card.Title>
        <Card.Text className='text-muted'>
          {product.describtion}
        </Card.Text>
        <Card.Text className='d-flex justify-content-end'>
          <AiOutlineShoppingCart className='cartIcon ' />
        </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default Product