import React from 'react';
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";
import Service from "../components/Service/Service";
import {FaUserCircle} from "react-icons/fa";


const UserCircle = () => <FaUserCircle className='top-navigation-icon' size='32'/>;


function Donate(props) {


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
                            link={`/dashboard/donation/creditcard`}
                            img={logo}
                            children="Creditcard"
                        />

                        <Service
                            link={`/dashboard/donation/ideal`}
                            img={logo}
                            children="Ideal"
                        />

                        <Service
                            link={`/dashboard/donation/paypal`}
                            img={logo}
                            children="PayPal"
                        />

                        <Service
                            link={`/dashboard/donation/paypal`}
                            img={UserCircle}
                            // img=<UserCircle />
                            children="PayPal"
                        />

                    </div>

                </div>
            </main>

        </>

    );
}

export default Donate;