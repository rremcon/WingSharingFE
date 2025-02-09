import React from 'react';
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";
import Service from "../components/Service/Service";
import airtaxi from "../assets/airtaxi.png";
import seat from "../assets/seat.png";
import ticket1 from "../assets/ticket1.png";
import suitcase from "../assets/suitcase.png";
import plane from "../assets/plane.png";
import assistance from "../assets/assistance.png";


function Shop(props) {

    return (

        <>

            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoRotating
                        className="App-logo-small"
                        img={logo}
                        imgTitle="logo"
                    />

                    <h1 className="page-title">Shop</h1>

                    <div className="grid-service-container">

                        <Service
                            link={`/dashboard/shop/drones`}
                            img={airtaxi}
                            children="Drones"
                        />

                        <Service
                            link={`/dashboard/shop/suitcases`}
                            img={suitcase}
                            children="Suitcases"
                        />

                        <Service
                            link={`/dashboard/shop/headphones`}
                            img={assistance}
                            children="Headphones"
                        />

                    </div>

                </div>
            </main>

        </>


    );
}

export default Shop;