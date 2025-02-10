import React from 'react';
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";
import Button from "../components/Button/Button";
import Service from "../components/Service/Service";


function AdultsOnly(props) {
    return (

        <>

            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoRotating
                        className="App-logo-small"
                        img={logo}
                        imgTitle="logo"
                    />

                    <h1 className="page-title">Book Adults Only flight.</h1>

                    <a href="http://flyadultsonly.com/">
                        <Button
                            className="select-button"
                            type="submit"
                            children="ENTER"
                            onClick={() => {
                            }}
                        />
                    </a>


                </div>

            </main>

        </>


);
}

export default AdultsOnly;