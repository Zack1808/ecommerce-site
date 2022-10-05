import React, { useState } from 'react'
import { Stepper, Step, StepLabel } from "@mui/material"

// Importing the costume components
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';

// Importing the style file
import '../css/Checkout.css';

const Checkout = () => {

  const steps = ['Shipping adress', 'Payment details']

  const [activeStep, setActiveStep] = useState(0);

  // "Component" that will display the right form depending on which step the user currently is
  const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

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