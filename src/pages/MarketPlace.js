import React from 'react';
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";


function Marketplace(props) {

    return (

        <>

            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoRotating
                        className="App-logo-small"
                        img={logo}
                        imgTitle="logo"
                    />

                    <h1 className="page-title">Marketplace</h1>

                    <div className="grid-service-container">


                    </div>

                </div>
            </main>

        </>


    );
}

export default Marketplace;