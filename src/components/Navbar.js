import React from 'react'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom';

// Importing the image
import logo from '../images/ecommerce.png'

// Importing the style file 
import '../css/Navbar.css'

const Navbar = ({ totalItems }) => {

  const location = useLocation();

  return (
    <>
       <div className="navbar">
        	<div className="logo">
              <Link to="/">
                <img src={logo} alt="Ecommerce" />
                <h4>Ecommerce</h4>
              </Link>
          </div>
          <div className="navbar-buttons">
              {location.pathname === "/" && <Link to="/cart">
                  <Badge badgeContent={totalItems} color="secondary">
                      <ShoppingCart />
                  </Badge>
              </Link>}
          </div>
       </div>
    </>
  )
}

export default Navbar