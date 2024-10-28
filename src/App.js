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


function App() {


  return (

    <>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/air-taxi" element={<AirTaxi/>}/>
            <Route path="/dashboard/seat" element={<PlaceSeat/>}/>
            <Route path="/dashboard/ticket" element={<PlaceTicket/>}/>
            <Route path="/dashboard/suitcase" element={<Suitcase/>}/>
            <Route path="/dashboard/adults-only" element={<AdultsOnly/>}/>
            <Route path="/dashboard/assistance" element={<Assistance/>}/>
        </Routes>

    </>

  );
}

export default App;
