import React from 'react'

// Importing the costume made components
import CartItem from './CartItem';

// Importing the style file
import '../css/FilledCart.css'

const FilledCart = ({ cart }) => {
  return (
    <div className='cart-list'>
        <div className="cart-list-items">
          {cart.line_items.map(item => {
              return <CartItem key={cart.id} item={item} />
          })}
        </div>
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

export default FilledCart