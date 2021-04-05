import React from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './addProduct.css'

const AddProduct = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-2 aside">
                    <div>
                        <h2>Fress velly</h2>
                        <Nav.Link as={Link} to="/manage-product">Manage Product</Nav.Link>
                        <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
                        <Nav.Link as={Link} to="/edit-product">Edit Product</Nav.Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div>
                        <h2>Add Product</h2>
                        <Form action="/add-products" method="POST">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control type="text" placeholder="Enter weight" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Add Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter price" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Add Photo</Form.Label>
                                <Form.Control type="file" placeholder="Enter weight" />
                            </Form.Group>
                            <Button variant="success" type="submit">Submit</Button>
                        </Form>

                            {/* <form action="/add-products" method="POST">
                                    <input type="text" placeholder="name" name="name"></input>
                                    <input type="text" placeholder="price" name="price"></input>
                                    <input type="text" placeholder="quantity" name="quantity"></input>
                                    <button type="submit">add product</button>
                            </form> */}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;


