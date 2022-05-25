import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import './style.scss'
import { MdShoppingCart } from 'react-icons/md';
import { Link } from "react-router-dom";

const NavBar = ({ itemsCount, selcteditem }) => {
  console.log('selcteditem from nav', selcteditem)
  console.log('itemsCount from nav', itemsCount)

  return (
    <Navbar bg="dark" variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand href="/">
          <img src='./assets/logo.png' alt='logo' className='logo'></img>
          Commerce.js
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='position-relative'>
            <Link to="/cart" >
              <MdShoppingCart className='cartshopingIcon'  />
            </Link>
            <span className='badge'>{itemsCount}</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default NavBar