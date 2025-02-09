import React from 'react';
import './App.css';
import './pages/Home.css';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom";
import './pages/Dashboard.css';
import Dashboard from "./pages/Dashboard";
import Assistance from "./pages/Assistance";
import PlaceTicket from "./pages/PlaceTicket";
import PlaceSeat from "./pages/PlaceSeat";
import AirTaxi from "./pages/AirTaxi";
import Suitcase from "./pages/Suitcase";
import AdultsOnly from "./pages/AdultsOnly";
import Community from "./pages/Community";
import Shop from "./pages/Shop";
import PrivateJet from "./pages/PrivateJet";
import MarketPlace from "./pages/MarketPlace";
import Fly from "./pages/Fly";

import {FaUserCircle,} from "react-icons/fa";


function App() {


  return (

    <>


        <div className='top-navigation'>
            <UserCircle/>
        </div>


        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/fly" element={<Fly/>}/>
            <Route path="/dashboard/fly/air-taxi" element={<AirTaxi/>}/>
            <Route path="/dashboard/fly/adults-only" element={<AdultsOnly/>}/>
            <Route path="/dashboard/fly/private-jet" element={<PrivateJet/>}/>
            <Route path="/dashboard/seat" element={<PlaceSeat/>}/>
            <Route path="/dashboard/ticket" element={<PlaceTicket/>}/>
            <Route path="/dashboard/suitcase" element={<Suitcase/>}/>
            <Route path="/dashboard/assistance" element={<Assistance/>}/>
            <Route path="/dashboard/community" element={<Community/>}/>
            <Route path="/dashboard/shop" element={<Shop/>}/>
            <Route path="/dashboard/shop/drones" element={<Shop/>}/>
            <Route path="/dashboard/shop/suitcases" element={<Shop/>}/>
            <Route path="/dashboard/shop/headphones" element={<Shop/>}/>
            <Route path="/dashboard/marketplace" element={<MarketPlace/>}/>
        </Routes>

    </>

  );
}


const UserCircle = () => <FaUserCircle className='top-navigation-icon' size='32'/>;


export default App;
