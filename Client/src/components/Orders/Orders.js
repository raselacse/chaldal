import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:27017/order-details?email='+loggedInUser.email,{
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(data =>{
            setOrders(data)
            console.log(data)
        })
    },[])
    return (
        <>
            <h3>You have: {orders.length}</h3>
            {
                orders.map(order => <li 
                                        key={order._id}>
                                        {order.name}
                                    </li>
                            )
            }
        </>
    );
};

export default Orders;