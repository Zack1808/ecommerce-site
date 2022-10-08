import React from 'react'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Importing the costume made components
import Review from './Review';

// importing the style file
import '../css/PaymentForm.css'

const stripePromise = loadStripe('pk_test_51LqcGyEpbrLAgRpbHJFeKtSoPqDQXpffqOGj6aePCGpzy9y23Pp1mJYDpyjeOEzXFwPRUN7xqeJzWcGIvv9oA64C00HL6qNgRt');

const PaymentForm = ({ shippingData, checkoutToken, goBack}) => {

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        innerWidth: "100%",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div className='payment-form'>
      <Review checkoutToken={checkoutToken} />
      <hr />
      <h3>Payment Method</h3>
      <Elements stripe={stripePromise} style={{ border: "1px solid red"}}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
             <form>
              <CardElement options={CARD_ELEMENT_OPTIONS} />
              <br /><br />
              <div className="payment-form-buttons">
                <button onClick={goBack}>Back</button>
                <button type='submit' disabled={!stripe}>Pay {checkoutToken.subtotal.formatted_with_code}</button>
              </div>
            </form>
        )}
        </ElementsConsumer>
      </Elements>
    </div>
  )
}

export default PaymentForm