import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

        const onSubmit = data => {            
          fetch('https://dry-spire-45697.herokuapp.com/watches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
      };
    return (
        <div className="mb-4">
              <h2 className="my-2">ADD PRODUCT</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=" form text-start  col-12">
                 <div className="row row-cols-md-13 row-cols-1 g-4 mx-3  my-2">
                            
                 <div className="col">
                 <label className="form-label">Image URL</label>
                 <input {...register("img")} className="form-control"  placeholder="Image URL" required/>
                </div>
                 <div className="col">
                 <label className="form-label">Product Name</label>
                 <input {...register("title")} className="form-control"  placeholder="Product Name" required/>
                </div>
        

                <div className="col">
                 <label className="form-label">Rating</label>
                 <input {...register("rating")} className="form-control" type="number" min="1" max="5"   placeholder="Rating" required/>
                </div>

                <div className="col">
                 <label className="form-label">Price</label>
                 <input {...register("price")} className="form-control" type="number"  placeholder="Price" required/>
                </div>

                <div className="col">
                 <label className="form-label">Description</label>
                 <textarea {...register("discription")} className="form-control" required/>
                </div>
             

            </div>
              <input className="btn btn-primary mx-4  my-3" type="submit" value="ADD PRODUCT" />
                  
                 </form>
        </div>
    );
};

export default AddProduct;