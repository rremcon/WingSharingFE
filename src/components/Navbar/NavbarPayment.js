import { Link } from "react-router-dom";

const NavbarPayment = () => (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-xl">Mijn Betaalplatform</h1>
        <div>
            <Link className="mr-4" to="/payments-history">Betaalgeschiedenis</Link>
            <Link to="/payments-dashboard">PaymentDashboard</Link>
        </div>
    </nav>
);

export default NavbarPayment;
