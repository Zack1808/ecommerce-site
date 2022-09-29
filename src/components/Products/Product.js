import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

// Importing the style file
import '../../css/Products/ProductStyle.css';

export const Product = ({ product }) => {

    return (
        <Card className="root">
            <CardMedia className="media" image="" title={product.name} /> 
            <CardContent>
                <div className="card-content">
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">
                    {product.desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className="card-actions">
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;