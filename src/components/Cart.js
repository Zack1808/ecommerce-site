import React from 'react'
import { Link } from 'react-router-dom'

// Importing the costume made components
import FilledCart from './FilledCart';

// Importing the style file
import '../css/Cart.css';

// Creating the Cart component
const Cart = ({ cart }) => {

  if(!cart.line_items) return 'loading'

  return (
    <div className="cart-container">
      <h1>Your shopping cart</h1>
      { !cart.line_items.length ? <div className="empty-cart">You have no items in your cart.&nbsp;<Link to="/">Return to shop</Link></div> : <FilledCart cart={cart} />}
    </div>
  )
}

export default Cart