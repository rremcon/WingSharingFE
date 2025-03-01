import React, { useEffect, useState } from "react";
import { fetchPaymentHistory } from "./paymentService";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const PaymentDashboard = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetchPaymentHistory().then(setPayments);
    }, []);

    // Groepeer betalingen per maand
    const getMonthlyTotals = () => {
        const monthlyTotals = {};

        payments.forEach((payment) => {
            const date = new Date(payment.createdAt);
            const month = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`;

            if (!monthlyTotals[month]) {
                monthlyTotals[month] = 0;
            }

            if (payment.status === "succeeded") {
                monthlyTotals[month] += payment.amount / 100; // Omzetten naar euro
            }
        });

        return Object.entries(monthlyTotals).map(([month, total]) => ({
            month,
            total: total.toFixed(2),
        }));
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>

            {/* Grafiek */}
            <div className="bg-white p-4 shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Maandelijkse omzet (€)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={getMonthlyTotals()}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" fill="#4CAF50" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PaymentDashboard;
