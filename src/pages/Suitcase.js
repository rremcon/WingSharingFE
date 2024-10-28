import React, {useState} from 'react';
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import '../components/Button/Button.css'


function Suitcase(props) {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [errormessage, setErrorMessage] = useState(null)
    const token = localStorage.getItem('token');


    async function trackSuitcase(e) {
        // voorkom refresh
        e.preventDefault();
        setErrorMessage(null)

        try {
            // Verstuur de data in een object en zorg dat de keys overeenkomen met die in de backend
            const response = await axios.post('http://localhost:8080/mobility', {
                    id: id,
                    telephoneNumber: telephoneNumber,
                },

                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

            setConfirm(true);
            console.log(response.data);

        } catch(e) {
            console.error(e);
        }
    }


    return (

        <>

            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoRotating
                        className="App-logo-small"
                        img={logo}
                        imgTitle="logo"
                    />

                    <h1 className="page-title">Track your GPS-suitcase.</h1>

                    <div className="form-container">
                        <form className="form" onSubmit={trackSuitcase}>

                            {/*<h1 className="form-title">Mobiliteit aanvragen</h1>*/}
                            <br/>

                            <label htmlFor="telephonenumber">
                                TelephoneNumber:
                                <input
                                    type="text"
                                    id="telephonenumber"
                                    name="telephonenumber-field"
                                    value={telephoneNumber}
                                    onChange={(e) => setTelephoneNumber(e.target.value)}
                                />
                            </label>

                            <br/>
                            <br/>

                        </form>

                        <a href="http://gpssuitcase.com/">
                            <Button
                                className="select-button"
                                type="submit"
                                onClick={trackSuitcase}
                            >Locate your suitcase
                                {confirm === true && <p>Location Sended!</p>}
                            </Button>
                        </a>

                    </div>

                </div>

            </main>

        </>


    );
}

export default Suitcase;