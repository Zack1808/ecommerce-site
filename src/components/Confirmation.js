import React from 'react'
import { Link } from 'react-router-dom'

// Importing costume components
import Loader from './Loader';

// Importing the style file
import '../css/Confirmation.css'

const Confirmation = ({ order, error }) => {

  if(error) return (
    <div className='confirmation-container'>
      <div className="error-message">Error: {error}</div>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  )

  if(order.customer) return (
    <div className="confirmation-container">
      <div>
        <h3>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</h3>
        <hr />
        <p>Order reference: {order.customer_reference}</p>
      </div>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  ) 
  return (
    <div className="loader-container">
      <Loader />
    </div>
  )
}

export default Confirmation