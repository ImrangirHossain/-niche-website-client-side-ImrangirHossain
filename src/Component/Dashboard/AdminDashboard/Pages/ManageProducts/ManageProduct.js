import React from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const ManageProduct = (props) => {
   const {product, products, setProducts} =props;
    const {title,discription,img,price,rating,_id } = props.product;
   
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://dry-spire-45697.herokuapp.com/watches/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = products.filter(product => product._id !== id);
                        setProducts(remainingOrders);
                    }
                });
               }
          }
    return (
        <div>
             <div className="col text-start">
                    <div className="card  h-100">
                    <img height="225" src={img} className="card-img-top w-75 mx-auto" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p><small> {discription}</small></p> 
                        <div className="d-flex justify-content-between align-items-end">
                        <div className="col-5">
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating>
                        <h4>Price: ${price}</h4>  
                        </div>
                        <div className="col-7 ms-2">
                          <button  onClick={() => handleDeleteUser(product._id)} className="btn btn-primary mb-2">DELETE PRODUCT</button>
                         </div>
                    </div>          
                     
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default ManageProduct;