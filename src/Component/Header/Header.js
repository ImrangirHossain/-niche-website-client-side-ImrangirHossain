import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const {user,logOut} = useAuth();

    return (
        <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> 
            <span className="fw-bold ms-2 fs-4">VOLCANO</span>     
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold my-1" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold my-1" aria-current="page" to="/explore">EXPLORE</Link>
              </li>

              {user?.email && <li className="nav-item px-3">
                <Link className="nav-link active fw-bold my-1" aria-current="page" to="/dashboard ">DASHBOARD </Link>
              </li>}
             
             <li className="nav-link active fw-bold px-2">
                {!user?.email && <NavLink className="btn btn-outline-light" to="/Login">LOGIN</NavLink>}
                {user?.email && <span><i className="far pe-1 fa-user-circle"></i>{user.email} </span>}
                {user?.email && <NavLink className="btn btn-outline-light" onClick={logOut} to="/Login">LOGOUT</NavLink>}
             </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;