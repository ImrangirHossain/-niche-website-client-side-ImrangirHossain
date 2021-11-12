import React from 'react';
// import AboutDelibary from '../About-Delibary/AboutDelibary';
// import AboutHome from '../About-Delibary/AboutHome';
// import Popularity from '../About-Delibary/Popularity';
// import Banner from '../Banner/Banner';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import FutureWrapper from '../FutureWrapper/FutureWrapper';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
// import Services from '../Services/Services';


const Home = () => {
    const {isLoading} = useAuth();
    if (isLoading) {
        return<div className="spinner-border text-info" role="status"></div>
         }
    return (
        <div>
             <Header></Header>

             <Banner></Banner>

             <FutureWrapper></FutureWrapper>

             <Products></Products>

             <Reviews></Reviews>

            <Footer></Footer>
        </div>
    );
};

export default Home;