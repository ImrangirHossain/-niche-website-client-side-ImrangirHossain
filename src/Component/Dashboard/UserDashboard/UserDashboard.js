import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import GiveReview from './Pages/GiveReview/GiveReview';
import MyOrders from './Pages/MyOrders/MyOrders';
import Payment from './Pages/Payment/Payment';

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
            
              <NavLink activeStyle={userDashboardMenu} className="d-block px-3 py-2 mt-4 text-muted rounded-pill" to={`${url}/pay`}>
              <i className="far fa-credit-card me-2"></i>PAY
              </NavLink>

              <NavLink activeStyle={userDashboardMenu} className="d-block px-3 py-2 mt-4 text-muted rounded-pill" to={`${url}/myOrder`}>
              <i className="fas fa-shopping-basket me-2"></i>MY ORDERS
              </NavLink>

              <NavLink activeStyle={userDashboardMenu} className="d-block px-3 py-2 mt-4 text-muted rounded-pill" to={`${url}/review`}>
              <i className="far fa-grin-stars me-2"></i>REVIEW
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
                <Payment></Payment>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Payment></Payment>
              </Route>
              <Route exact path={`${path}/review`}>
                <GiveReview></GiveReview>
              </Route>
              <Route exact path={`${path}/myOrder`}>
                <MyOrders></MyOrders>
              </Route>
            </Switch>
          </div>
        </div>
        </div>
    );
};

export default UserDashboard;