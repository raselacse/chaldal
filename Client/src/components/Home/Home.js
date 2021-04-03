import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import fakeData from "../../fakeData";
import Products from '../Products/Products';
const Home = () => {
    // const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState([]);
    // const allProduct = () =>{
    //     fetch('http://localhost:27017/add-product', {
    //         method: 'POST',
    //         body: JSON.stringify(fakeData),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
    // }
    useEffect(()=>{
        fetch('http://localhost:27017/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
            <div className="container">
                <div className="row  justify-content-between">
                    <div className="col-lg-3">
                        {
                            products.map(pd => <Products key={pd.key} product={pd}></Products>)
                        }
                        {/* <Button onClick={allProduct}>add all</Button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;