import React from 'react'
import { Card } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import './style.scss';
import Button from 'react-bootstrap/Button';
// import { useState } from 'react';


const Product = ({ itemdata, addToCart }) => {
  // const [itemsCount, setItemsCount] = useState(0)

  // const addToCart = () => {
  //   setItemsCount(itemsCount + 1)
  // }

  return (
    <Card style={{ width: '18rem' }} key={itemdata.id} >
      <Card.Img variant="top" src={`./assets/${itemdata.image}`} />
      <Card.Body >
        <Card.Title className='d-flex justify-content-between' >
          {itemdata.name}
          <span > ${itemdata.price}</span>
        </Card.Title>
        <Card.Text className='text-muted'>
          {itemdata.description}
        </Card.Text>
        <Card.Text className='d-flex justify-content-end'>
          <Button variant="light" onClick={addToCart} >
            <MdAddShoppingCart className='cartIcon ' />
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product