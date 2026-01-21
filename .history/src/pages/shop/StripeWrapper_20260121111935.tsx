import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';

const stripePromise = loadStripe('pk_live_51SQZoXEBCNGNWfiq8SzmEDe2dNw6EffbKtOwQM471c3gcMDC3Ja4Yl1rOPfAeBxZPhTohxo2MVF0sxWTuBtWQGyN005PkTnh0E');

export default function StripeWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}
