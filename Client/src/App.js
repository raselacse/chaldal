import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/components/Home/Home';
import Checkout from '../src/components/Checkout/Checkout';
import Login from '../src/components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import AddProduct from '../src/components/AddProduct/AddProduct';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/admin'>
                <Admin />
              </Route>
              <PrivateRoute path='/checkout/:key'>
                <Checkout />
              </PrivateRoute>
              <PrivateRoute path='/orders'>
                <Orders />
              </PrivateRoute>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/manage-product'>
                <ManageProduct />
              </Route>
              <Route path='/add-product'>
                <AddProduct />
              </Route>
              <Route path='*'>
                <h1>Not Found !</h1>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
  );
}

export default App;
