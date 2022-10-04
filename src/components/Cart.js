import React from 'react'

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
      { !cart.line_items.length ? <div className="empty-cart">You have no items in your cart.</div> : <FilledCart cart={cart} />}
      <div className="cart-details">
        <h4>Subtotal: {cart.subtotal.formatted_with_code}</h4>
        <div className="buttons">
          <button className="empty-button">Empty cart</button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart