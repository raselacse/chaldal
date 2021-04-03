import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(bookings)
    useEffect(()=>{
        fetch('http://localhost:5000/order-details?email='+loggedInUser.email,{
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization" : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setBookings(data)
        })
    },[])
    return (
        <div>
            <h3>You have: {bookings.length}</h3>
            {
                bookings.map(book => <li 
                    key={book._id}>
                    {book.name} from:
                    {book.checkIn} To:
                    {book.checkOut}
                    </li>)
            }
        </div>
    );
};

export default Orders;