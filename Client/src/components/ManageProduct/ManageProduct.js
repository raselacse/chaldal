import React from 'react';
import { Form, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-lg-2 aside">
                        <div>
                            <h2>Fress velly</h2>
                            <Nav.Link as={Link} to="/manage-product">Manage Product</Nav.Link>
                            <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
                            <Nav.Link as={Link} to="/edit-product">Edit Product</Nav.Link>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div>
                            <h2>Manage Product</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;