import React from 'react';
import logo from '../assets/wingsharing-propellor-640x480.png';
import {useNavigate} from "react-router-dom";
import LogoRotating from "../components/Logo/LogoRotating";
import Button from "../components/Button/Button";

function Home() {

    const navigate = useNavigate();


    return (

        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">

                    <LogoRotating
                        className="App-logo-big"
                        img={logo}
                        imgTitle="logo"
                    />

                    <Button
                        className="wingsharing-button"
                        type="submit"
                        clickHandler={() => navigate('/dashboard')}
                    >
                        WingSharing
                    </Button>

                    <h6 className="starting-slogan">Transforming aviation together.</h6>

                </div>
            </header>


            <footer id="footer" className="outer-content-container">
                <div className="inner-content-container">
                    WingSharing &copy; 2025
                </div>
            </footer>

        </>

    );
}

export default Home;
