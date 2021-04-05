import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:27017/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
            <div className="row justify-content-center align-items-center">
                {
                    products.map(pd => <Products key={pd.key} product={pd}></Products>)
                }
            </div>
        </>
    );
};

export default Home;