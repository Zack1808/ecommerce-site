import React from 'react'

// Importing the costume made components
import CartItem from './CartItem';

// Importing the style file
import '../css/FilledCart.css'
import { Link } from 'react-router-dom';

const FilledCart = ({ cart, onUpdateAmount, onRemoveAll, onRemoveItem }) => {
  return (
    <div className='cart-list'>
        <div className="cart-list-items">
          {cart.line_items.map(item => {
              return <CartItem key={cart.id} item={item} onUpdateAmount={onUpdateAmount} onRemoveItem={onRemoveItem} />
          })}
        </div>
        <div className="cart-details">
        <h4>Subtotal: {cart.subtotal.formatted_with_code}</h4>
        <div className="buttons">
          <button className="empty-button" onClick={onRemoveAll}>Empty cart</button>
          <Link to="/checkout" className="checkout">Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default FilledCart