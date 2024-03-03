import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise =  loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Paymentmethod = ({ arrayoforder }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems:arrayoforder,
      mode: "payment",
      successUrl: "http://localhost:3000/successful-payment",
      cancelUrl: "http://localhost:3000/denied-payment",
    });
    if (error) {
      console.error("Something went wrong at the checkout:", error.message);
    }
  };
  return (
    <button
      className="bn632-hover bn19"
      onClick={() => {
        handleClick();
      }}
    >
      ACQUISTA
    </button>
  );
};
export default Paymentmethod