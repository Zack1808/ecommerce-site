import React from 'react';
import { Grid } from '@mui/material';

// Importing the costume made components
import Product from './Product';

const products = [
    {
        id: 1,
        name: "Shoes",
        desc: "Running shoes",
        price: "$5"
    },
    {
        id: 2,
        name: "Macbook Pro",
        desc: "Apple macbook",
        price: "$10"
    },

]

// Creating the Products component
const Products = () => {
    return (
        <div>
            <Grid container justify="center" spacing="4">
                {products.map(product => {
                    return <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                })}
            </Grid>
        </div>
    )
}

export default Products;