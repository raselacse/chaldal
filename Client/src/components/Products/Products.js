import { Button, Card, CardDeck } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { category, img, seller, price, stock, key } = props.product;

    return (
        <>
            <CardDeck className="py-5 text-center">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{category}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Title>Price: ${price}</Card.Title>
                        <Button as={Link} to={"checkout/" + key} variant="primary">Buy Now</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    );
};

export default Products;