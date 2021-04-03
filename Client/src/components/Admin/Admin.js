import React from 'react';
import addProduct from '../addProduct/addProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    return (
        <>
            <addProduct/>
            <ManageProduct/>
        </>
    );
};

export default Admin;