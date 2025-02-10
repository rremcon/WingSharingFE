import React from 'react';
import logo from '../assets/wingsharing-propellor-640x480.png';
import LogoRotating from "../components/Logo/LogoRotating";
import Service from "../components/Service/Service";
import '../components/Service/Service.css'
import '../components/Button/Button.css'


function Flights(props) {

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

                    <h1 className="page-title">Flights</h1>

                    <div className="grid-service-container">



                    </div>

                </div>
            </main>

        </>

    );
}

export default Flights;