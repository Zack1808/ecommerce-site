import React from 'react'
import { AddShoppingCart } from '@mui/icons-material';

// Importing the style file
import '../css/Product.css';

export const Product = ({ product }) => {

    return (
        <div className="card">
            <div className="card-header" style={{ backgroundImage: `url(${product.image})`}}>
            </div>
            <div className="card-body">
                <div className="card-body-title">
                    <h1>{product.name}</h1>
                    <h1>{product.price}</h1>
                </div>
                <h4>{product.desc}</h4>
            </div>
            <div className="card-footer">
                <button>
                    <AddShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default Product;