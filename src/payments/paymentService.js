import axios from 'axios';

export const createPaymentIntent = async (amount, currency) => {
    try {
        const response = await axios.post('http://localhost:8080/api/payment/create-payment-intent', { amount, currency });

        if (response.data.clientSecret) {
            console.log("✅ API Response:", response.data); // Debugging
            return response.data;
        } else {
            throw new Error("❌ No clientSecret returned");
        }
    } catch (error) {
        console.error("❌ Error creating PaymentIntent:", error);
        throw new Error('Failed to create payment intent');
    }
};




export const updatePaymentStatus = async (paymentIntentId, status, paymentMethod) => {
    try {
        const response = await axios.post('http://localhost:8080/api/payment/update-payment-status', null, {
            params: { paymentIntentId, status, paymentMethod }
        });

        console.log("✅ Payment status updated successfully:", response.data);
    } catch (error) {
        console.error("❌ Error updating payment status:", error);
        throw new Error('Failed to update payment status');
    }
};



export const fetchPaymentHistory = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/payment/history');
        return response.data;
    } catch (error) {
        console.error("Error retrieving payment history:", error);
        return [];
    }
};
