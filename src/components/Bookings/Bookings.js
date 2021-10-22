import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings?email='+loginUser.email) //very important
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    return (
        <div style={{padding: '50px 0'}}>
            <h1>Total Bookings : {bookings.length} </h1>
            {
                bookings.map(bk => <li> {bk.displayName} has booked a room from <strong> {new Date(bk.checkIn).toDateString('dd/MM/yyyy')} </strong> to <strong> {new Date(bk.checkOut).toDateString('dd/MM/yyyy')}</strong></li>)
            }
        </div>
    );
};

export default Bookings;