import React, { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel } from "@mui/material";
import { commerce } from '../api/commerce';

// Importing the costume components
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';

// Importing the style file
import '../css/Checkout.css';
import Loader from './Loader';

const Checkout = ({ cart }) => {

  const steps = ['Shipping adress', 'Payment details']

  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async() =>{
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
        setCheckoutToken(token)
      }
      catch (error) {

      }
    }
    generateToken()
  }, [cart])

  // "Component" that will display the right form depending on which step the user currently is
  const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} /> : <PaymentForm />

  // Will display the loader if the checkout token has not been created yet
  if(!checkoutToken) return <Loader />

  return (
    <div className="checkout-container">
      <main className="checkout-layout">
        <h1>Checkout</h1>
        <Stepper activeStep={activeStep} className="stepper">
          {steps.map(step => ( <Step key={step}><StepLabel>{step}</StepLabel></Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? <Confirmation /> : <Form />}
      </main>
    </div>
  )
}

export default Checkout