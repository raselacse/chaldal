import React, { useContext, useEffect, useState } from 'react';
import { Jumbotron, Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { key } = useParams()
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:27017/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    
    const product = fakeData.find(pd => pd.key === key)    
    const { category, price } = product;
    const productDetails = {category, price}

    const [selectedDate, setSelectedDate] = useState({
        date: new Date()
    });
    // const handleCheckInDate = (date) => {
    //     const newDates = { ...selectedDate }
    //     newDates.checkIn = date;
    //     setSelectedDate(newDates);
    // };

    const handleOrder = () => {
        const order = { ...loggedInUser, ...productDetails, ...selectedDate};
        fetch('http://localhost:27017/orders', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    
    return (
        <>
            <Jumbotron>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{category}</td>
                            <td>{1}</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td>${price}</td>
                        </tr>
                    </tbody>
                </Table>
                <p className="f-right">
                    <Button onClick={handleOrder} as={Link} to="/orders" variant="primary">Order</Button>
                </p>
            </Jumbotron>
        </>
    );
};

export default Checkout;