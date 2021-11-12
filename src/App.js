import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import Notfound from './Component/NotFound/NotFound';
import Dashboard from './Component/Dashboard/Dashboard';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Explore from './Component/Explore/Explore';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider> 
      <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/home'>
                <Home></Home>
            </Route>
           <Route path='/explore'>
                <Explore></Explore>
            </Route>
            <PrivateRoute path='/dashboard '>
                <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/placeOrder/:produceId'>
                <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/dashboard '>
                <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          
            <Route path='*'>
                <Notfound></Notfound>
            </Route>
        </Switch>
        
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
