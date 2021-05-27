import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datetime/css/react-datetime.css";
import 'boxicons';
import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './containers/Header';
import Home from './components/Home';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';

function App() {
  
  return (
    <Router>
    <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddCustomer} />
          <Route path="/list" component={CustomerList} />
          <Route path="/edit/:id" component={AddCustomer} />
        </Switch>
    </Router>
  )
}
export default App;

