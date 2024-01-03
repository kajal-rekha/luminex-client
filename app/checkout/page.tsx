"use client";

import {
  CardElement,
  useStripe,
  useElements,
  Elements as StripeElements,
} from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

if (!stripePublicKey) {
  throw new Error(
    "Stripe public key is not defined in the environment variables."
  );
}

const stripePromise = loadStripe(stripePublicKey);

const CheckoutForm = () => {
  const stripe: Stripe | null = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or elements is not initialized");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      try {
        const { paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

     
      } catch (error) {
        console.error("Error creating payment method:", error);
      }
    } else {
      console.error("Card element is null");
    }
  };

  return (
    <div className='mt-40'>
      <StripeElements stripe={stripePromise}>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type='submit' disabled={!stripe}>
            Pay
          </button>
        </form>
      </StripeElements>
    </div>
  );
};

export default CheckoutForm;
