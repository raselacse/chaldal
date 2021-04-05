import React, { useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './addProduct.css'

const AddProduct = () => {
    const [data, setData] = useState({
       key: "",
       price: "",
       category: "",
       image: ""
    })

    const hangleValue = (e) =>{
        const newData = {...data}
        newData[e.target.id] = e.target.value;
        setData(newData)
    }
    const handleSubmit = (e) =>{
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
                        
            <form>
                <input onChange={(e)=>hangleValue(e)} type="text" placeholder="Enter Product Key" id="key" value={data.key}></input>
                <input onChange={(e)=>hangleValue(e)} type="text" placeholder="Enter Price" id="price" value={data.price}></input>
                <input onChange={(e)=>hangleValue(e)} type="text" placeholder="Enter Category" id="category" value={data.category}></input>
                <input onChange={(e)=>hangleValue(e)} type="file" id="img" value={data.img}></input>
                <button onClick={(e)=>handleSubmit(e)} type="submit">add product</button>
            </form>
                        {/* <Form action="/add-products" method="POST">
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
                        </Form> */}


                            
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;


