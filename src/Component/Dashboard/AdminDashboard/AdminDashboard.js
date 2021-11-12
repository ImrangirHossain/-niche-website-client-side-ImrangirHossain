import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Payment from '../UserDashboard/Pages/Payment/Payment';
import AddProduct from './Pages/AddProduct/AddProduct';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageAllOrder from './Pages/ManageAllOrders/ManageAllOrder';
import ManageProducts from './Pages/ManageProducts/ManageProducts';

const UserDashboard = () => {
  let { path, url } = useRouteMatch();
  const userDashboardMenu ={
    fontWeight: 'bold',
    backgroundColor: '#CCE7FB',
  }
  return (
        <div>
             <div className="row container">
          <div className="col-md-5 col-lg-4 ">
            <div className="dashboard text-start p-4 pt-1">
            
              <NavLink activeStyle={userDashboardMenu} className="d-block px-3 py-2 mt-4 text-muted rounded-pill" to={`${url}/manageProducts`}>
              <i class="fas fa-sliders-h me-2"></i>Manage Products
              </NavLink>

              <NavLink activeStyle={userDashboardMenu} className="d-block px-3 py-2 mt-4 text-muted rounded-pill" to={`${url}/addProduct`}>
              <i class="fas fa-plus-square me-2"></i>Add A Product
              </NavLink>

              <NavLink activeStyle={userDashboardMenu} className="d-block px-3 py-2 mt-4 text-muted rounded-pill" to={`${url}/manageAllOrder`}>
              <i class="fas fa-tasks me-2"></i>Manage All Orders
              </NavLink>

              <NavLink activeStyle={userDashboardMenu} className="d-block px-3 py-2 mt-4 text-muted rounded-pill" to={`${url}/makeAdmin`}>
              <i class="fas fa-user-plus me-2"></i>Make Admin
              </NavLink>
                <hr />

              <NavLink className="d-block px-3 py-2 mt-4 text-muted rounded" to="/">
              <i className="fas fa-home me-2"></i>HOME
              </NavLink>
             
            </div>
          </div>

          <div className="col-md-7 col-lg-8 border border-1 rounded mt-2">
 
            <Switch>
              <Route exact path={`${path}`}>
                <ManageProducts></ManageProducts>
              </Route>
              <Route exact path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </Route>
              <Route exact path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </Route>
              <Route exact path={`${path}/manageAllOrder`}>
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              
            </Switch>
          </div>
        </div>
        </div>
    );
};

export default UserDashboard;