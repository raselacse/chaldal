import React, { useState } from 'react';
import fakeData from "../../fakeData";
import Products from '../Products/Products';
const Home = () => {
    const first10 = fakeData.slice(0,10);
    const [product, setProduct] = useState(first10);
    return (
        <>
            <div className="container">
                <div className="row  justify-content-between">
                    <div className="col-lg-3">
                        {
                            product.map(pd => <Products key={pd.key} product={pd}></Products>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;