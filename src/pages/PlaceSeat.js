import React, { useState } from 'react';
import axios from 'axios';
import Button from "../components/Button/Button";
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";
import {useNavigate} from "react-router-dom";


function PlaceSeat(props) {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [category, setCategory] = useState("");
    const [airline, setAirline] = useState('*');
    const [flightNumber, setFlightNumber] = useState('');
    const [seatNumber, setSeatNumber] = useState('');
    const [airlineCode, setAirlineCode] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
    const [availableplaces, setAvailableplaces] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [errormessage, setErrorMessage] = useState(null)
    const token = localStorage.getItem('token');


    async function addSeat(e) {
        // voorkom refresh
        e.preventDefault();
        setErrorMessage(null)
        let pattern = /^\d{4}-\d{2}-\d{2}$/;
        let isMatch = pattern.test(date);
        if (!isMatch) {
            setErrorMessage("INPUT INVALID. (yyyy-mm-dd)")
            return false;
        }

        console.log(airline, flightNumber, seatNumber, departure);

        try {
            // Verstuur de data in een object en zorg dat de keys overeenkomen met die in de backend
            const response = await axios.post('http://localhost:8080/mobility', {
                    id: id,
                    category: category,
                    date: date,
                    time: time,
                    departure: departure,
                    arrival: arrival,
                    flightnumber: flightNumber,
                    seatnumber: seatNumber,

                    price: price,
                    availableplaces: availableplaces,
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

                    <h1 className="page-title">Place your empty seat here.</h1>

                    <div className="form-container">
                        <form className="form" onSubmit={addSeat}>

                            {/*<h1 className="form-title">Mobiliteit aanvragen</h1>*/}
                            <br/>

                            <label htmlFor="airline-code">
                                Airline-Code:
                                <input
                                    type="text"
                                    id="airline-code"
                                    name="airline-code-field"
                                    value={airlineCode}
                                    onChange={(e) => setAirlineCode(e.target.value)}
                                />
                            </label>

                            <br/>
                            <br/>

                            <label htmlFor="category">
                                {/**Category:*/}
                                <select
                                    type="text"
                                    id="category"
                                    name="category-field"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="StandaardBasis">
                                        Economy
                                    </option>
                                    <option value="ProjectBasis">
                                        Business
                                    </option>
                                </select>
                            </label>

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
                            <br/>

                            <label htmlFor="departure">
                                Departure:
                                <select
                                    type="text"
                                    id="departure"
                                    name="departure-field"
                                    value={departure}
                                    onChange={(e) => setDeparture(e.target.value)}
                                >
                                    <option value="DWC">
                                        DWC Dubai
                                    </option>
                                    <option value="DXB">
                                        DXB Dubai
                                    </option>
                                </select>
                            </label>

                            <br/>

                            <label htmlFor="arrival">
                                Arrival:
                                <select
                                    type="text"
                                    id="arrival"
                                    name="arrival-field"
                                    value={arrival}
                                    onChange={(e) => setArrival(e.target.value)}
                                >
                                    <option value="DWC">
                                        DWC Dubai
                                    </option>
                                    <option value="DXB">
                                        DXB Dubai
                                    </option>
                                </select>
                            </label>

                            <br/>
                            <br/>

                            <label htmlFor="flight-number">
                                FlightNumber:
                                <input
                                    type="text"
                                    name="flight-number-field"
                                    id="flight-number"
                                    value={flightNumber}
                                    onChange={(e) => setFlightNumber(e.target.value)}
                                />
                            </label>

                            <br/>

                            <label htmlFor="seat-number">
                                SeatNumber:
                                <input
                                    type="text"
                                    id="seat-number"
                                    name="seat-number-field"
                                    value={seatNumber}
                                    onChange={(e) => setSeatNumber(e.target.value)}
                                />
                            </label>

                            <br/>
                            <br/>

                        </form>

                        <Button
                            className="select-button"
                            type="submit"
                            onClick={addSeat}
                        >Add Empty Seat
                            {confirm === true && <p>Seat Added!</p>}
                        </Button>

                    </div>

                </div>

            </main>

        </>

    );
}

export default PlaceSeat;