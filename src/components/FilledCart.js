import React from 'react'

// Importing the costume made components
import CartItem from './CartItem';

// Importing the style file
import '../css/FilledCart.css'

const FilledCart = ({ cart }) => {
  return (
    <div className='cart-list'>
        {cart.line_items.map(item => {
            return <CartItem key={cart.id} item={item} />
        })}
    </div>
  )
}

export default FilledCart