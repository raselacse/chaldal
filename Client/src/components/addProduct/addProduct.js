import React, { useState } from 'react';
import { Form, Button, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './addProduct.css'

const AddProduct = () => {
    const [data, setData] = useState({
        key: "",
        price: "",
        category: "",
        image: ""
    })

    const hangleValue = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:27017/add-products', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <>
            <div className="row py-4">
                <div className="col-lg-2 aside">
                    <div>
                        <h2>Fress velly</h2>
                        <Nav.Link className="text-white" as={Link} to="/manage-product">Manage Product</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/add-product">Add Product</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/edit-product">Edit Product</Nav.Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div>
                        <h2 className="my-3">Add Product</h2>

                        <Form className="py-4">
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Product Category</Form.Label>
                                    <Form.Control onChange={(e) => hangleValue(e)} id="category" value={data.category} type="text" placeholder="Enter category" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control onChange={(e) => hangleValue(e)} id="price" value={data.price} type="text" placeholder="Enter price" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Product Key</Form.Label>
                                    <Form.Control onChange={(e) => hangleValue(e)} id="key" value={data.key} type="text" placeholder="Enter key" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Add Photo</Form.Label>
                                    <Form.Control onChange={(e) => hangleValue(e)} type="file" id="image" value={data.image} />
                                </Form.Group>
                            </Form.Row>

                            <Button variant="success"  onClick={(e) => handleSubmit(e)} type="submit">
                                Add Product
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;


