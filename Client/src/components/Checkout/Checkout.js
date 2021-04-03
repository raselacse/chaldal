import React, { useContext, useState } from 'react';
import { Jumbotron, Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { key } = useParams()
    const product = fakeData.find(pd => pd.key === key)
    const { name, price } = product;
    const productDetails = {name, price}
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date()
    });
    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleOrder = () => {
        const order = { ...loggedInUser, ...productDetails};
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
                            <td>{name}</td>
                            <td>{1}</td>
                            <td>{price}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td>{price}</td>
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