import React, { useEffect, useState } from 'react';
import { Form, Nav, Button, Jumbotron, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:27017/manage-products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    const deleteProduct = (e,id) =>{
        fetch('http://localhost:27017/delete/' + id, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    e.target.parentNode.parentNode.style.display = "none"
                }
            })
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
                    <Jumbotron>
                        <Table className="text-center" responsive>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(pd => <tr key={pd._id}>
                                    <td>{pd.category}</td>
                                    <td>{pd.price}</td>
                                    <td><Button onClick={(e)=>deleteProduct(e, pd._id)}>Delete</Button></td>
                                </tr>)}
                                
                            </tbody>
                        </Table>
                    </Jumbotron>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;