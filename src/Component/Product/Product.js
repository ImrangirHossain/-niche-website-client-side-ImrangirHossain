import React from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {title,discription,img,price,rating,_id } = props.product;
    return (
        <div>
             <div className="col text-start">
                    <div className="card   h-100">
                    <img height="225" src={img} className="card-img-top w-75 mx-auto" alt="..."/>
                    <div className="card-body d-flex justify-content-between align-items-end">
                    <div className="col-9">
                        <h5 className="card-title">{title}</h5>
                        <p><small> {discription}</small></p> 
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating>
                        <h3>Price: ${price}</h3>   
                    </div>          
                     <NavLink className="col-2" to={`/placeOrder/${_id}`}>
                          <button className="btn btn-primary mb-2"><i className="fas fa-shopping-basket"></i></button>
                    </NavLink>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;