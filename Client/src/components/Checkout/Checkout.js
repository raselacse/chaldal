import React from 'react';
import { Jumbotron, Button, Table } from 'react-bootstrap';

const Checkout = () => {
    return (
        <>
            <Jumbotron>
                <h1>Checkout</h1>
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
                            
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                            
                        </tr>
                    </tbody>
                </Table>
                <p className="f-right">
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </>
    );
};

export default Checkout;