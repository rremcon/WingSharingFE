import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccessPage = () => {
    const [searchParams] = useSearchParams();
    const paymentIntentId = searchParams.get('payment_intent');
    const [paymentStatus, setPaymentStatus] = useState(null);

    useEffect(() => {
        const fetchPaymentStatus = async () => {
            try {
                console.log("Fetching payment status for paymentIntentId:", paymentIntentId); // Log the ID

                const response = await axios.get('http://localhost:8080/api/payment/status', {
                // const response = await axios.get(`http://localhost:8080/api/payment/status/${paymentIntentId}`, {
                    params: { paymentIntentId },
                });
                setPaymentStatus(response.data.status); // Update the payment status state
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.error("Error: Payment status not found. Please check the payment ID.");
                } else {
                    console.error("Error fetching payment status:", error);
                }
            }
        };

        if (paymentIntentId) {
            fetchPaymentStatus();
        }
    }, [paymentIntentId]);

    return (
        <div>
            <h1>Payment Status</h1>
            {paymentStatus ? (
                <p>Status: {paymentStatus}</p>
            ) : (
                <p>Fetching payment status...</p>
            )}
        </div>
    );
};


export default PaymentSuccessPage;



