import React from 'react';
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";
import Service from "../components/Service/Service";
import mail from "../assets/mail.png";
import chat from "../assets/chat.png";
import telephone from "../assets/telephone.png";


function Assistance(props) {


    return (

        <>

            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoRotating
                        className="App-logo-small"
                        img={logo}
                        imgTitle="logo"
                    />

                    <h1 className="page-title">Choose your assistance.</h1>

                    <div className="grid-service-container">

                        <Service
                            // link={`/dashboard/air-taxi`}
                            img={mail}
                            children="Email"
                        />

                        <Service
                            // link={`/dashboard/seat`}
                            img={chat}
                            children="Chat"
                        />

                        <Service
                            // link={`/dashboard/ticket`}
                            img={telephone}
                            children="Telephone"
                        />


                    </div>

                    </div>

            </main>

        </>


);
}

export default Assistance;