import { PaymentElement, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setProcessing] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // Stap 1: Vraag een clientSecret aan de backend
        const response = await fetch("/api/payment/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 1000 }) // €10
        });

        const { clientSecret } = await response.json();

        // Stap 2: Betaal met Stripe
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (result.error) {
            console.error(result.error.message);
        } else {
            alert("Betaling gelukt!");
        }

        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/*<PaymentElement/>*/}
            <CardElement/>
            <button type="submit" disabled={isProcessing}>Betaal</button>
        </form>
    );
};

export default CheckoutForm;
