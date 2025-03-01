import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { createPaymentIntent, updatePaymentStatus } from './paymentService'; // Zorg ervoor dat dit pad correct is

const CheckoutForm = ({ amount, currency }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null); // Declare paymentMethod state

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);
        setPaymentError(null);
        setPaymentStatus(null);

        try {
            // Confirm payment with PaymentElement (DO NOT manually create PaymentMethod)
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment-success`,
                },
            });

            if (error) {
                setPaymentError(error.message);
            } else {
                setPaymentStatus(paymentIntent.status);

                if (paymentIntent.status === "succeeded") {
                    await updatePaymentStatus(paymentIntent.id, 'succeeded', paymentIntent.payment_method);
                }
            }
        } catch (error) {
            setPaymentError(error.message);
        } finally {
            setIsProcessing(false);
        }
    };



    return (
        <div className="stripe">
            <h4>Payment</h4>

            <form onSubmit={handleSubmit}>
                <PaymentElement />
                {paymentError && <div className="error">{paymentError}</div>}
                <button type="submit" disabled={isProcessing || !stripe || !elements}>
                    {isProcessing ? 'Processing...' : 'Pay'}
                </button>
            </form>

            {paymentStatus && (
                <div className={`payment-status ${paymentStatus}`}>
                    Payment Status: {paymentStatus === 'succeeded' ? '✅ Payment Succeeded!' : paymentStatus}
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;
