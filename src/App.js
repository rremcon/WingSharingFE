import React from 'react';
import './App.css';
import './pages/Home.css';
import Home from './pages/Home';
import {Link, Route, Routes} from "react-router-dom";
import './pages/Dashboard.css';
import Dashboard from "./pages/Dashboard";
import Assistance from "./pages/Assistance";
import PlaceTicket from "./pages/PlaceTicket";
import PlaceSeat from "./pages/PlaceSeat";
import AirTaxi from "./pages/AirTaxi";
import Suitcase from "./pages/Suitcase";
import AdultsOnly from "./pages/AdultsOnly";
import Community from "./pages/Community";
import Products from "./pages/Products";
import PrivateJet from "./pages/PrivateJet";
import MarketPlace from "./pages/MarketPlace";
// import Fly from "./pages/Fly";
import PaymentPage from "./payments/PaymentPage";
import Flights from "./pages/Flights";
import Privacy from "./pages/Privacy";
import AboutUs from "./pages/AboutUs";
import Button from "./components/Button/Button";
import {FaUserCircle,} from "react-icons/fa";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './payments/CheckoutForm';
import PaymentHistory from "./payments/PaymentHistory";
import PaymentDashboard from "./payments/PaymentDashboard";
import PaymentSuccessPage from "./payments/PaymentSuccessPage";


const UserCircle = () => <FaUserCircle className='top-navigation-icon' size='32'/>;


function App() {


  return (

      <>

          <div className='top-navigation'>
              <Link to="/payment-checkout">
                  <Button
                      className="donate-button"
                      type="submit"
                      children="donate"
                      onClick={() => {
                      }}
                  />
              </Link>
              <UserCircle/>
          </div>


          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/privacy" element={<Privacy/>}/>
              <Route path="/about-us" element={<AboutUs/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              {/*<Route path="/dashboard/fly" element={<Fly/>}/>*/}
              <Route path="/dashboard/fly/flights" element={<Flights/>}/>
              <Route path="/dashboard/fly/private-jet" element={<PrivateJet/>}/>
              <Route path="/dashboard/fly/air-taxi" element={<AirTaxi/>}/>
              <Route path="/dashboard/fly/adults-only" element={<AdultsOnly/>}/>
              <Route path="/dashboard/seat" element={<PlaceSeat/>}/>
              <Route path="/dashboard/ticket" element={<PlaceTicket/>}/>
              <Route path="/dashboard/suitcase" element={<Suitcase/>}/>
              <Route path="/dashboard/assistance" element={<Assistance/>}/>
              <Route path="/dashboard/community" element={<Community/>}/>
              <Route path="/dashboard/products" element={<Products/>}/>
              <Route path="/dashboard/products/drones" element={<Products/>}/>
              <Route path="/dashboard/products/suitcases" element={<Products/>}/>
              <Route path="/dashboard/products/headphones" element={<Products/>}/>
              <Route path="/dashboard/marketplace" element={<MarketPlace/>}/>
              <Route path="/payment-checkout" element={<PaymentPage/>}/>
              <Route path="/payment-success" element={<PaymentSuccessPage/>}/>
              <Route path="/payments-history" element={<PaymentHistory/>}/>
              <Route path="/payments-dashboard" element={<PaymentDashboard/>}/>
          </Routes>


          <footer id="footer" className="outer-content-container">
              <div className="inner-content-container">
                  <Link className="dashboard-link-footer" to="/dashboard">Dashboard</Link>
                  WingSharing&trade; &copy; 2025
              </div>
          </footer>

      </>

  );
}


export default App;
