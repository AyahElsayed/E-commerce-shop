import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import products from '../data'
import Product from './product/Product'
import './style.scss'
import NavBar from './navbar/Navbar';
import { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import CartItems from './cart/Cart';

const Products = ({ productsData }) => {

  const [itemsCount, setItemsCount] = useState(0);
  const [selcteditem, setSelcteditem] = useState([]);

  const addToCart = (product) => {
    setItemsCount(itemsCount + 1);
    console.log('selected item id', product.id);
    setSelcteditem((arr) => [...arr, product]);
    // if i console here data appeare before updating
    // console.log('new items', selcteditem)
  };

  const removeFromCart = (el) => {
    let hardCopy = [...selcteditem];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el);
    setSelcteditem(hardCopy);
    console.log('items without removed', hardCopy)
  };

  useEffect(() => {
    console.log('new items', selcteditem)
  }, [selcteditem])

  return (
    <>
      <NavBar itemsCount={itemsCount} />
      <Container fluid className='productsContainer'>
        <div className='title'>
          Welcome to our Ammazing shop
        </div>
        <Row className='justify-content-center'>
          {productsData.map((product) => (
            <Col sm={12} md={5} lg={3} className="m-2" key={product.id} >
              <Product itemdata={product}
                addToCart={() => addToCart(product)}
              />
            </Col>
          ))}
        </Row>

        {/* cart */}
        <div className='container cartCointainer'>
          <h3 className='cartTitle'>
            your Shopping cart
            <MdShoppingCart />
          </h3>
          {selcteditem.length ?
            <CartItems selcteditem={selcteditem} removeFromCart={removeFromCart} />
            :
            <p>You have no items in your shopping cart, start adding some!</p>
          }
        </div>
      </Container>
    </>
  )
}

export default Products