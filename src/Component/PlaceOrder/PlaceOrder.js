import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PlaceOrder = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

    const {produceId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(()=>(
        fetch('https://dry-spire-45697.herokuapp.com/watches')
        .then(res => res.json())
        .then(data => setDetails(data))
    ),[])

        const singleDetails = details.find(singleDetail => singleDetail._id === produceId);

        const onSubmit = data => {  
          const {img, title, discription, price} = singleDetails;
          const email = user.email;
          const status ='Pending';
          const name = user.name;
          const newOrder = {img, title,price, discription,name, email, status};
          fetch('https://dry-spire-45697.herokuapp.com/orders/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
      };
    return (
      <div>
        <Header></Header>
        <div className="row container row-cols-1 row-cols-md-2 d-flex p-3 align-items-center">
           <div className="col">

           <div className="d-flex justify-content-center align-items-center my-3">
              <div className="text-start">
                    <div className="card  h-100">
                    <img src={singleDetails?.img} className="card-img-top w-50 mx-auto" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{singleDetails?.title}</h5>
                     <p><small> {singleDetails?.discription}</small></p>   
                     <Rating
                            initialRating={singleDetails?.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating>
                        <h3>Price: ${singleDetails?.price}</h3>       
                    </div>
                    </div>
                 </div>
                 </div>
           </div>

             <div className="col ">
             <h2 className=" fs-4">Invoice Information</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=" form text-start">
                 <div className="row row-cols-md-13 row-cols-1 g-4 mx-3  my-2">
                            
                 <div className="col">
                 <label className="form-label">Watch Name</label>
                 <input value={singleDetails?.title} {...register("text")} className="form-control"  placeholder="Your Name*" required/>
        
                </div>

                <div className="col">
                 <label className="form-label">Your Name</label>
                 <input value={user.displayName} {...register("name")} className="form-control"  placeholder="Your Name*" required/>
        
                </div>

              <div className="col">
                <label className="form-label">Your Email address</label>
                <input value={user.email} {...register("email")} className="form-control"    placeholder="Your Email Address*" required />
              </div>
                
                <div className="col">
                  <label className="form-label">Your Phone Number</label>
                  <input type="number" {...register("number")} className="form-control"  placeholder="Your Number*"  required />
                 </div>
                <div className="col">
                  <label className="form-label">Your Address</label>
                  <input {...register("address")} className="form-control"  placeholder="Your Address*"/>
                 </div>
            </div>

              <button  className="btn btn-primary mx-4 my-3" type="submit"  >PURCHASE<i className="text-white ms-2 fas fa-shopping-cart"></i></button>
             
                  
                 </form>
             </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default PlaceOrder;