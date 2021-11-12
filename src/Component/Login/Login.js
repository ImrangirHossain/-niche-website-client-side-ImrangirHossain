import React from 'react';
import { useHistory, useLocation } from 'react-router';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const Login = () => {
    const {  signInUsingGoogle, handleLogin, handleEmailChange,handlePasswordChange, error} = useAuth();
    const location = useLocation();
    const history = useHistory();
  const handleUserLogin=e=>{
    e.preventDefault();
    handleLogin(location, history);
  }
    return (
      <div>
        <Header></Header>
        <div  className="text-start p-5 my-4 mx-auto ">
       <div className="col-lg-4 col-md-6  col-12 mx-auto">
        <h1 >Please Login</h1>
        <form onSubmit={handleUserLogin} className="mb-2">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input onBlur={handleEmailChange} type="email" className="form-control" required/>
            <div className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input  onBlur={handlePasswordChange} type="password" className="form-control" required/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <div className="text-danger">{error}</div>
          <button type="submit" className="btn btn-primary">Login</button>
          </form>

            <Link to="/register">Don't have an account?</Link>
          </div>
      </div>
      </div>
    );
};

export default Login;