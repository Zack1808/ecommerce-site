import React from 'react'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Importing the costume made components
import Review from './Review';

// importing the style file
import '../css/PaymentForm.css'

const stripePromise = loadStripe('pk_test_51LqcGyEpbrLAgRpbHJFeKtSoPqDQXpffqOGj6aePCGpzy9y23Pp1mJYDpyjeOEzXFwPRUN7xqeJzWcGIvv9oA64C00HL6qNgRt');

const PaymentForm = ({ shippingData, checkoutToken, goBack,  onCaptureCheckout, setNextStep, currentStep}) => {

  // Function that will handle the submition of the form
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if(!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement})
    if(error) console.log(error)
    else {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        billing: {
          name: 'Primary',
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.shippingRegion,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry
        },
        shipping: {
          name: 'Primary',
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.shippingRegion,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry
        },
        fulfillment: { shipping_method: shippingData.shippingOption},
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          }
        }
      }

      onCaptureCheckout(checkoutToken.id, orderData);
      setNextStep(currentStep + 1)
    }
  }

  return (
    <div className='payment-form'>
      <Review checkoutToken={checkoutToken} />
      <hr />
      <h3>Payment Method</h3>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
             <form onSubmit={e => handleSubmit(e, elements, stripe)}>
              <CardElement />
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