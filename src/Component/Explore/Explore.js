import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const {isLoading} = useAuth();
    useEffect(()=>{
        fetch('https://dry-spire-45697.herokuapp.com/watches')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[]);
    console.log(products)
    if (isLoading) {
        return<div className="spinner-border text-info" role="status"></div>
        }
    return (
        <div>
            <Header></Header>
            <div className="p-5 ">
            <h2 className="fw-bold text-start">All WATCHES</h2>

            {/* services */}

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0 ">
            {
                products?.map(product => <Product
                    key={product._id} product={product}></Product>)
            }
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Explore;