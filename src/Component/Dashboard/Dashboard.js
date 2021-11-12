import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UserDashboard from './UserDashboard/UserDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';


const Dashboard = () => {
  const {isLoading,user, logOut} = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(()=>{
      fetch(`https://dry-spire-45697.herokuapp.com/checkAdmin/${user?.email}`)
      .then(res => res.json())
      .then(data=> {
          if(data[0]?.role === "admin"){
            setIsAdmin(true)
          }
          else{
              setIsAdmin(false)
          }
      })
  },[]);
    if (isLoading) {
        return<div className="spinner-border text-info" role="status"></div>
         }

    
    return (
    <div>
     <div>
      <div className="dashboard-container ">
          <div className="header container row row-cols-2 p-4 pe-3">
              <div className="col">
               <h5 className=" text-start ">Volcano <span className="text-primary">Dashboard</span></h5>
               </div>

               <div className="col">
              <div className="text-end ">
              {user?.email && <span><i className="far pe-1 fa-user-circle"></i>{user.email} </span>}
                {user?.email && <NavLink className="btn btn-outline-dark" onClick={logOut} to="/Login">LOGOUT</NavLink>}
              </div>
              </div>
          </div>
          
  
        {/* admin dashboard  */}      
        {
        isAdmin && <AdminDashboard></AdminDashboard>
        }


        {/* user dashboard  */}
        {
            !isAdmin && <UserDashboard></UserDashboard>      
        }

      </div>
    </div>
        </div>
    );
};

export default Dashboard;