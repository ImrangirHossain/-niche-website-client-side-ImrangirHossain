import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../hooks/useAuth';

const GiveReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

        const onSubmit = data => {  
          data.name = user.displayName;

          fetch('https://dry-spire-45697.herokuapp.com/review/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Reviewed ');
                    reset();
                }
            })

      };
    return (
      <div>
        <div className="row container row-cols-1 d-flex p-3 align-items-center">
             <div className="col">
             <h2 className=" fs-4">Your Experience on Our Website</h2>

                <form onSubmit={handleSubmit(onSubmit)} className=" form text-start">
                 <div className="row row-cols-md-13 row-cols-1 g-4 mx-3  my-2">

                <div className="col">
                 <label className="form-label">Your Name</label>
                 <input value={user.displayName} {...register("name")} className="form-control" required/>
        
                </div>

              
                <div className="col">
                  <label className="form-label">Please, Rate Our Website</label>
                  <input type="number" {...register("rating")} className="form-control"  min="1" max="5" placeholder="Rating(number between 0-5)"  required />
                 </div>
                <div className="col">
                  <label className="form-label">Your Experience</label>
                  <textarea {...register("discription")} className="form-control"  placeholder="" required/>
                 </div>
            </div>

              <button  className="btn btn-primary mx-4 my-3" type="submit"  >GIVE REVIEW</button>
             
                  
                 </form>
             </div>
        </div>
      </div>
    );
};

export default GiveReview;