import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {isLoading} = useAuth();
    useEffect(()=>{
        fetch('https://dry-spire-45697.herokuapp.com/review')
        .then(res => res.json())
        .then(data=> setReviews(data))
    },[]);
    if (isLoading) {
        return<div className="spinner-border text-info" role="status"></div>
        }
    return (
        <div  className="p-5"> 
            <h3>Our Clients Review</h3>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4  g-3 mt-0 mx-1 ">
        {
                reviews?.map(review => <Review
                    key={review._id} review={review}></Review>)
            }
            </div>
     </div>
    );
};

export default Reviews;