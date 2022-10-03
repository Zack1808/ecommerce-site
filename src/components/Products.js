import React from 'react';

// Importing the costume made components
import Product from './Product';

// Importing the style file 
import "../css/Products.css"

// Creating the Products component
const Products = ({ products }) => {
    return (
        <div className='product-container'>
            {
                products && products.map(product => <Product key={product.id} product={product} />)
            }
        </div>
    )
}

export default Products;