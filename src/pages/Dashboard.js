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
import {Link, useNavigate} from "react-router-dom";
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

                    <h1 className="page-title">Transforming aviation together.</h1>

                    <div className="grid-service-container">

                        <Service
                            link={`/dashboard/fly/flights`}
                            img={plane}
                            children="Flights"
                        />

                        <Service
                            link={`/dashboard/fly/private-jet`}
                            img={plane1}
                            children="Private Jet"
                        />

                        <Service
                            link={`/dashboard/fly/air-taxi`}
                            img={airtaxi}
                            children="Air Taxi"
                        />

                        <Service
                            link={`/dashboard/fly/adults-only`}
                            img={seat}
                            children="Adults Only"
                        />

                        <Service
                            link={`/dashboard/ticket`}
                            img={ticket1}
                            children="Place Ticket"
                        />

                        <Service
                            link={`/dashboard/marketplace`}
                            img={ticket}
                            children="Marketplace"
                        />

                        <Service
                            link={`/dashboard/suitcase`}
                            img={suitcase}
                            children="My Suitcase"
                        />

                        <Service
                            link={`/dashboard/assistance`}
                            img={assistance}
                            children="Assistance"
                        />

                        <Service
                            link={`/dashboard/community`}
                            img={logo}
                            children="Community"
                        />

                        <Service
                            link={`/dashboard/products`}
                            img={logo}
                            children="Products"
                        />

                        <Service
                            link={`/dashboard/donation`}
                            img={logo}
                            children="Donate"
                        />

                        <Service
                            link={`/dashboard/payment-checkout`}
                            img={logo}
                            children="Payment Checkout"
                        />


                        {/*<Service*/}
                        {/*    link={`/dashboard/fly`}*/}
                        {/*    img={plane1}*/}
                        {/*    children="Fly"*/}
                        {/*/>*/}


                        {/*<Service*/}
                        {/*    link={`/dashboard/seat`}*/}
                        {/*    img={seat}*/}
                        {/*    children="Place Seat"*/}
                        {/*/>*/}


                    </div>

                </div>
            </main>


            <footer id="footer" className="outer-content-container">
                <div className="inner-content-container">
                    <div className="footer-links">
                        <Link className="about-us" to="/about-us">About Us</Link>
                        <br/>
                        <Link className="privacy-policy" to="/privacy">Privacy</Link>
                    </div>
                </div>
            </footer>

        </>

    );
}


export default Dashboard;