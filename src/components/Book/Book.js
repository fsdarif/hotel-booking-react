import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { Button } from '@mui/material';
import Bookings from '../Bookings/Bookings';



const Book = () => {
    const [loginUser, setLoginUser] = useContext(UserContext);

    const [date, setDate] = useState({
        checkIn: new Date(),
        checkOut: new Date(),
    });

    // const inputHandled = (e) => {
    //     if(e.target.name === 'checkInDate') {
    //         setDate({checkIn: e.target.value})
    //     }
    //     else if(e.target.name === 'checkOutDate'){
    //         setDate({checkOut: e.target.value})
    //     }
    // };

    const {bedType} = useParams();

    const handleBooking = () => {
        const newBooking = {...date, ...loginUser};
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    const {checkIn, checkOut} = date;
    return (
        <div style={{textAlign: 'center'}}>
            <p>Hello, {loginUser.displayName} </p>
            <h5>Let's book a {bedType} Room.</h5>
            <p>Want a <Link to="/home">different room?</Link> </p>

            <input type="date" name="checkInDate" />
            <input type="date" name="checkOutDate"/>

            <Button onClick={handleBooking}
            variant="outlined">Book Now</Button>
            <Bookings />
        </div>
        );
    };

export default Book;