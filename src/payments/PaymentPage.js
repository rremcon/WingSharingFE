import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import logo from '../assets/wingsharing-propellor-640x480.png';
import LogoRotating from '../components/Logo/LogoRotating';
import CheckoutForm from './CheckoutForm';
import { createPaymentIntent } from './paymentService'; // Import payment service

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentPage = () => {
    const [amount, setAmount] = useState(100); // Default bedrag
    const [currency, setCurrency] = useState('EUR');
    const [clientSecret, setClientSecret] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                console.log("🔄 Fetching PaymentIntent...");

                const response = await axios.post('http://localhost:8080/api/payment/create-payment-intent', {
                    amount: 1000,
                    currency: "EUR"
                });

                console.log("✅ Response received:", response.data);

                if (!response.data.clientSecret) {
                    throw new Error("❌ No clientSecret in response");
                }

                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error("❌ Error fetching PaymentIntent:", error);
                setError(error.message);  // Je kunt hier de foutmelding bijhouden
            } finally {
                setIsLoading(false);  // Zet isLoading op false zodra het laden klaar is
            }
        };

        fetchPaymentData();
    }, []);


    return (
        <main className="outer-content-container">
            <div className="inner-content-container">
                <h1>Payment Page</h1>
                <p>Amount: {amount / 100} EUR</p>
                <p>Client Secret: {clientSecret ? "✅ Received" : "❌ Not received"}</p> {/* 🚀 Debugging */}

                {isLoading ? (
                    <p>Loading payment...</p>
                ) : error ? (
                    <p>Error: {error}. Please try again.</p>
                ) : clientSecret ? (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm amount={amount} currency={currency} />
                    </Elements>
                ) : (
                    <p>Unexpected error occurred. Please refresh the page.</p>
                )}

            </div>
        </main>
    );

};

export default PaymentPage;




//
// import React, { useState } from 'react';
// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm'; // Zorg ervoor dat dit correct is
//
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
//
// const PaymentPage = () => {
//     const [amount] = useState(100); // Bedrag in centen
//     const [currency] = useState('EUR');
//     const [clientSecret, setClientSecret] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     const handlePaymentInit = async () => {
//         try {
//             setIsLoading(true);
//             console.log("🔄 Initializing payment...");
//
//             // Verzend de betaling aanvraag naar de server wanneer de gebruiker klikt
//             const response = await axios.post("http://localhost:8080/api/payment/create-payment-intent", {
//                 amount: amount,
//                 currency: currency,
//             });
//
//             if (response.data.clientSecret) {
//                 setClientSecret(response.data.clientSecret); // Zet de clientSecret voor Stripe
//             } else {
//                 throw new Error("❌ No clientSecret received from server");
//             }
//         } catch (error) {
//             console.error("❌ Error initializing payment:", error);
//             setError("Fout bij het laden van de betaling.");
//         } finally {
//             setIsLoading(false);
//         }
//     };
//
//     return (
//         <main className="outer-content-container">
//             <div className="inner-content-container">
//                 <h1>Betalingspagina</h1>
//                 <p>Bedrag: {amount / 100} EUR</p>
//                 <p>{error && <span style={{ color: "red" }}>{error}</span>}</p>
//
//                 {/* Alleen tonen wanneer de clientSecret beschikbaar is */}
//                 {!clientSecret ? (
//                     <button onClick={handlePaymentInit} disabled={isLoading}>
//                         {isLoading ? 'Betaling wordt voorbereid...' : 'Betaal nu'}
//                     </button>
//                 ) : (
//                     <Elements stripe={stripePromise} options={{ clientSecret }}>
//                         <CheckoutForm amount={amount} currency={currency} />
//                     </Elements>
//                 )}
//             </div>
//         </main>
//     );
// };
//
// export default PaymentPage;
