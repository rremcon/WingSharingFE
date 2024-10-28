import React from 'react';
import logo from '../assets/wingsharing-propellor-640x480.png';
import airtaxi from '../assets/airtaxi.png';
import seat from '../assets/seat.png';
// import ticket from '../assets/ticket.png';
import ticket1 from '../assets/ticket1.png';
import suitcase from '../assets/suitcase.png';
import assistance from '../assets/assistance.png';
import plane from '../assets/plane.png';
import {useNavigate} from "react-router-dom";
import LogoRotating from "../components/Logo/LogoRotating";
import Service from "../components/Service/Service";
import '../components/Service/Service.css'
import '../components/Button/Button.css'


function Dashboard(props) {

    // const navigate = useNavigate();

    return (

        <>

            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoRotating
                        className="App-logo-small"
                        img={logo}
                        imgTitle="logo"
                    />

                    <h1 className="page-title">Dashboard</h1>

                    <div className="grid-service-container">

                        <Service
                            link={`/dashboard/air-taxi`}
                            img={airtaxi}
                            children="Air Taxi"
                        />

                        <Service
                            link={`/dashboard/seat`}
                            img={seat}
                            children="Place Seat"
                        />

                        <Service
                            link={`/dashboard/ticket`}
                            img={ticket1}
                            children="Place Ticket"
                        />

                        <Service
                            link={`/dashboard/suitcase`}
                            img={suitcase}
                            children="My Suitcase"
                        />

                        <Service
                            link={`/dashboard/adults-only`}
                            img={plane}
                            children="Fly Adults Only"
                        />

                        <Service
                            link={`/dashboard/assistance`}
                            img={assistance}
                            children="Assistance"
                        />

                    </div>

                </div>
            </main>

        </>

    );
}

export default Dashboard;