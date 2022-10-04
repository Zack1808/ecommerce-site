import React from 'react'

// Importing the style file
import '../css/CartItem.css';

const CartItem = ({ item, onUpdateAmount, onRemoveItem }) => {
  return (
    <div className="card">
        <div className="card-header" style={{ backgroundImage: `url(${item.image.url})`}}>
        </div>
        <div className="card-body">
            <div className="card-body-title">
                <h2>{item.name}</h2>
                <h2>{item.line_total.formatted_with_code}</h2>
            </div>
            <div className="card-footer cart-footer">
                <div className="quantity-display">
                    <button onClick={() => {onUpdateAmount(item.id, item.quantity - 1)}}> - </button>
                    <div className="quantity">{item.quantity}</div>
                    <button onClick={() => {onUpdateAmount(item.id, item.quantity + 1)}}> + </button>
                </div>
                <button className="remove" onClick={() => onRemoveItem(item.id)}>Remove Item</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem