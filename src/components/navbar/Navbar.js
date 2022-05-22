import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import './style.scss'
import { MdShoppingCart } from 'react-icons/md';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src='./assets/logo.png' alt='logo' className='logo'></img>
          Commerce.js
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="/cart">
              <MdShoppingCart className='cartshopingIcon ' />
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar