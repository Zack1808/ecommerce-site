import React from 'react'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

// Importing the image
import logo from '../images/ecommerce.png'

// Importing the style file 
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <>
       <div className="navbar">
        	<div className="logo">
                <img src={logo} alt="Ecommerce" />
                <h4>Ecommerce</h4>
            </div>
            <div className="buttons">
                <button>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </button>
            </div>
       </div>
    </>
  )
}

export default Navbar