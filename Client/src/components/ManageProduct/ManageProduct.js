import React, { useEffect, useState } from 'react';
import { Form, Nav, Button, Jumbotron, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(()=>{
        fetch('http://localhost:27017/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
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
                    <Jumbotron>
                        <Table className="text-center" responsive>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Weight</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><Button>Update</Button> <Button>Delete</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Jumbotron>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;