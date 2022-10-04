import React from 'react'
import { Link } from 'react-router-dom'

// Importing the costume made components
import FilledCart from './FilledCart';
import Loader from './Loader'

// Importing the style file
import '../css/Cart.css';

// Creating the Cart component
const Cart = ({ cart, onUpdateAmount, onRemoveItem, onRemoveAll }) => {

  if(!cart.line_items) return <Loader />

  return (
    <div className="cart-container">
      <h1>Your shopping cart</h1>
      { !cart.line_items.length ? <div className="empty-cart">You have no items in your cart.&nbsp;<Link to="/">Return to shop</Link></div> : <FilledCart cart={cart} onUpdateAmount={onUpdateAmount} onRemoveAll={onRemoveAll} onRemoveItem={onRemoveItem} />}
    </div>
  )
}

export default Cart