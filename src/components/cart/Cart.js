import React from 'react'
import { Link } from "react-router-dom";
import Products from '../Products';
import './style.scss'
import Button from 'react-bootstrap/Button'

const Cart = () => {
  return (
    <div className='container cartContainer'>
      <p>return to all
        <Link to="/"> products</Link>
      </p>
      <h3>Your Shopping Cart</h3>
      <p>still empty</p>
      {/* <Products /> */}

      <Button variant="light">
        <Link to="/checkout">
          Checkout
        </Link>
      </Button>
    </div>
  )
}

export default Cart