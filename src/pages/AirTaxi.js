import React, {useState} from 'react';
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";


function AirTaxi(props) {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [airport, setAirport] = useState('');
    const [inhabitantSalutation, setInhabitantSalutation] = useState('*');
    const [lastname, setLastname] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [errormessage, setErrorMessage] = useState(null)
    const token = localStorage.getItem('token');


    async function addTicket(e) {
        e.preventDefault()
        setErrorMessage(null)
        let pattern = /^\d{4}-\d{2}-\d{2}$/;
        let isMatch = pattern.test(date);
        if (!isMatch) {
            setErrorMessage("INPUT INVALID. (yyyy-mm-dd)")
            return false;
        }

        try{
            // const response = await axios.post(`http://digizorgerbackend.azurewebsites.net/activities`, {
            const response = await axios.post(`http://localhost:8080/activities`, {
                    id: id,
                    date: date,
                    time: time,
                    airport: airport,
                    salutation: inhabitantSalutation,
                    lastname: email,
                },

                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

            setConfirm(true);
            console.log(response.data);

        } catch (e) {
            console.error(e)
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

                    <h1 className="page-title">Order your Air Taxi.</h1>

                    <div className="form-container">
                        <form className="form" onSubmit={addTicket}>

                            {/*<h1 className="form-title">Activiteit toevoegen</h1>*/}
                            <br/>

                            <div>{errormessage}</div>
                            <input
                                type="date"
                                id="date-field"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                name="date"
                                placeholder="datum (yyyy-mm-dd)"/>
                            <br/>
                            <input
                                type="time"
                                id="time-field"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                name="time"
                                placeholder="tijdstip"/>
                            <br/>
                            {/*<br/>*/}

                            <label htmlFor="airport">
                                {/**Airport:*/}
                                <select
                                    type="text"
                                    id="airport"
                                    name="airport-field"
                                    value={airport}
                                    onChange={(e) => setAirport(e.target.value)}
                                >
                                    <option value="DXB">
                                        DXB Dubai
                                    </option>
                                    <option value="AMS">
                                        AMS Amsterdam
                                    </option>
                                </select>
                            </label>

                            <br/>
                            <br/>

                            <label htmlFor="inhabitant-salutation">
                                *Salutation:
                                <select
                                    type="text"
                                    id="inhabitant-salutation"
                                    name="inhabitant-salutation-field"
                                    value={inhabitantSalutation}
                                    onChange={(e) => setInhabitantSalutation(e.target.value)}
                                >
                                    <option value="*">
                                        *
                                    </option>
                                    <option value="Mr.">
                                        Mr.
                                    </option>
                                    <option value="Mrs.">
                                        Mrs.
                                    </option>
                                </select>
                            </label>

                            <br/>

                            <label htmlFor="lastname">
                                *Lastname:
                                <input
                                    type="text"
                                    name="lastname-field"
                                    id="lastname"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </label>

                            <br/>

                            <label htmlFor="email">
                                *Email:
                                <input
                                    type="text"
                                    name="email-field"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                            <br/>

                            <label htmlFor="passportnumber">
                                *PassportNr:
                                <input
                                    type="text"
                                    name="passport-number-field"
                                    id="passportnumber"
                                    value={passportNumber}
                                    onChange={(e) => setPassportNumber(e.target.value)}
                                />
                            </label>

                            <br/>
                            <br/>

                        </form>

                        <Button
                            className="select-button"
                            type="submit"
                            onClick={addTicket}
                        >Order Air Taxi
                            {confirm === true && <p>Order Placed!</p>}
                        </Button>

                    </div>

                </div>

            </main>

        </>


    );
}

export default AirTaxi;