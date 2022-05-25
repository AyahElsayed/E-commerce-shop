import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'
import Button from 'react-bootstrap/Button'
import NavBar from '../navbar/Navbar';

const Cart = ( {selcteditem}) => {
  console.log('selcteditem from cart',selcteditem)

  const isEmpty = true;

  const EmptyCart = () =>(
    <p>You have no items in your shopping cart, start adding some!</p>
  )

  const FilledCart = () =>(
    <p></p>
  )

  return (
    <>
      <NavBar/>
      <div className='container cartContainer'>
        <p>return to all
          <Link to="/"> products</Link>
        </p>
        <h3>Your Shopping Cart</h3>

        {isEmpty ? <EmptyCart /> : <FilledCart/> }
        {/* <Products /> */}

        <Button variant="light">
          <Link to="/checkout">
            Checkout
          </Link>
        </Button>
      </div>
    </>
  )
}

export default Cart