import React from 'react';
import logo from '../assets/wingsharing-propellor-640x480.png';
import airtaxi from '../assets/airtaxi.png';
import seat from '../assets/seat.png';
import ticket from '../assets/ticket.png';
import ticket1 from '../assets/ticket1.png';
import suitcase from '../assets/suitcase.png';
import assistance from '../assets/assistance.png';
import plane from '../assets/plane.png';
import plane1 from '../assets/plane1.png';
import {useNavigate} from "react-router-dom";
import LogoRotating from "../components/Logo/LogoRotating";
import Service from "../components/Service/Service";
import '../components/Service/Service.css'
import '../components/Button/Button.css'


function Fly(props) {

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

                    <h1 className="page-title">Fly</h1>

                    <div className="grid-service-container">

                        <Service
                            link={`/dashboard/fly/air-taxi`}
                            img={airtaxi}
                            children="Air Taxi"
                        />

                        <Service
                            link={`/dashboard/fly/adults-only`}
                            img={plane}
                            children="Adults Only"
                        />

                        <Service
                            link={`/dashboard/fly/private-jet`}
                            img={plane1}
                            children="Private Jet"
                        />

                    </div>

                </div>
            </main>

        </>

    );
}

export default Fly;
