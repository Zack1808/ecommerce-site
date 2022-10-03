import React from 'react'
import { AddShoppingCart } from '@mui/icons-material';

// Importing the style file
import '../css/Product.css';

export const Product = ({ product }) => {

    return (
        <div className="card">
            <div className="card-header" style={{ backgroundImage: `url(${product.image.url})`}}>
            </div>
            <div className="card-body">
                <div className="card-body-title">
                    <h2>{product.name}</h2>
                    <h2>{product.price.formatted_with_code}</h2>
                </div>
                <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
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