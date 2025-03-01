import React, { useEffect, useState } from "react";
import { fetchPaymentHistory } from "./paymentService";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
// import "jspdf-autotable";

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        fetchPaymentHistory().then(setPayments);
    }, []);

    // Filter betalingen
    const filteredPayments = payments.filter((payment) => {
        const matchesSearch = searchTerm
            ? payment.amount.toString().includes(searchTerm) ||
            payment.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.status.toLowerCase().includes(searchTerm.toLowerCase())
            : true;

        const paymentDate = new Date(payment.createdAt);
        const matchesDate =
            (!startDate || paymentDate >= new Date(startDate)) &&
            (!endDate || paymentDate <= new Date(endDate));

        return matchesSearch && matchesDate;
    });

    // PDF genereren
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Betaalgeschiedenis", 20, 10);
        doc.autoTable({
            head: [["Bedrag (€)", "Valuta", "Status", "Datum"]],
            body: filteredPayments.map((payment) => [
                (payment.amount / 100).toFixed(2),
                payment.currency,
                payment.status,
                new Date(payment.createdAt).toLocaleString(),
            ]),
        });
        doc.save("betalingen.pdf");
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Betaalgeschiedenis</h2>

            {/* Filters en export */}
            <div className="mb-4 flex space-x-4">
                <input
                    type="text"
                    placeholder="Zoek..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <CSVLink
                    data={filteredPayments}
                    filename="betalingen.csv"
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    CSV Export
                </CSVLink>
                <button
                    onClick={generatePDF}
                    className="p-2 bg-red-500 text-white rounded"
                >
                    PDF Export
                </button>
            </div>
        </div>
    );
};

export default PaymentHistory;
