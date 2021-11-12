import React from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register,reset, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    fetch("https://dry-spire-45697.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
            if (result.modifiedCount) {
                alert('Admin Added Successfully');
                reset();
            }
      });
  };
  return (
    <div>
      <h1>MAKE ADMIN</h1>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <input
            {...register("email")} 
            type="email" 
            className="form-control w-75 mx-auto"  
            placeholder="Enter Email Address" required
         />
         
            <input
                className="submit-btn btn btn-primary mt-3"
                type="submit"
                value="MAKE ADMIN"
            />
      </form>
    </div>
  );
};

export default MakeAdmin;
