import React from 'react'
import './style.scss'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const CartItems = ({ selcteditem ,removeFromCart}) => {

  const [cartTotal, setCartTotal] = useState(0);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < selcteditem.length; i++) {
      totalVal += selcteditem[i].price;
    }
    setCartTotal(totalVal);
  };

  useEffect(() => {
    total();
  }, [selcteditem]);
  return (
    <>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>price</th>
            <th>qty</th>
            <th>total price</th>
            <th>actions</th>
          </tr>
        </thead>
        {selcteditem.map((item, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{item.name} </td>
              <td>${item.price}</td>
              <td>+ -</td>
              <td>$</td>
              <td><Button
                onClick={()=>removeFromCart(item.id)}
              >delete</Button>
              </td>
            </tr>
          </tbody>
        ))}</Table>

      <h4>
        Total: ${cartTotal}
      </h4>
      <Link to="/checkout">
        <Button variant="secondary">Checkout</Button>
      </Link>
    </>
  )
}

export default CartItems