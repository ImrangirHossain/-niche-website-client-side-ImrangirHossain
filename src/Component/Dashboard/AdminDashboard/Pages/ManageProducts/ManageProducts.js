import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const {isLoading} = useAuth();
    useEffect(()=>{
        fetch('https://dry-spire-45697.herokuapp.com/watches')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[]);
    if (isLoading) {
        return<div className="spinner-border text-info" role="status"></div>
        }
    return (
        <div className="p-3">
            <h2 className="fw-bold text-start mt-3">MANAGE PRODUCTS</h2>

            {/* services */}

            <div className="row row-cols-1 row-cols-md-2  g-4 mt-0 ">
            {
                products.map(product => <ManageProduct
                    key={product._id}
                     product={product} 
                     products={products}
                     setProducts={setProducts}
                     ></ManageProduct>)
            }
            </div>
        </div>
    );
};

export default ManageProducts;