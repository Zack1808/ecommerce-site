import React from 'react';

// Importing the costume made components
import Product from './Product';
import Loader from './Loader'

// Importing the style file 
import "../css/Products.css"

// Creating the Products component
const Products = ({ products, onAddToCart }) => {

    console.log(products)

    if(products.length === 0) return <Loader />

    return (
        <div className='product-container'>
            {
                products && products.map(product => <Product key={product.id} product={product} onAddToCart={onAddToCart} />)
            }
        </div>
    )
}

export default Products;