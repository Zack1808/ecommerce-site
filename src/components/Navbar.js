import React from 'react'
import { AppBar, Toolbar , IconButton, Badge, MenuItem, Menu, Typography  } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

// Importing the image
import logo from '../images/ecommerce.png'

// Importing the style file 
import '../css/Navbar.css'

const Navbar = () => {
  return (
     <>
        <AppBar position="fixed" className='navigation' color='inherit'>
            <Toolbar>
                <Typography varian="h6" className='title' color="inherit">
                    <img src={logo} alt="E-commerce" height="25px" className='image' />
                    E-Commerce
                </Typography>
                <div className='grow'/>
                <div className="button">
                    <IconButton aria-label='Show cart items' color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
     </>
  )
}

export default Navbar