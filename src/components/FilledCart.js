import React from 'react'

// Importing the style file
import '../css/FilledCart.css'

const FilledCart = ({ cart }) => {
  return (
    <div className='cart-list'>
        {cart.line_items.map(item => {
            return <div key={item.id} className="card">
                <div className="card-header" style={{ backgroundImage: `url(${item.image.url})`}}>
                </div>
                <div className="card-body">
                    <div className="card-body-title">
                        <h2>{item.name}</h2>
                        <h2>{item.price.formatted_with_code}</h2>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
            </div>
        })}
    </div>
  )
}

export default FilledCart