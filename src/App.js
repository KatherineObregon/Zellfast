import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "./Login.js"
import LandingPage from "./components/layout/LandingPage";

function App(){
    return <div className="app">
    
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>  
        <Route path="/">
          <LandingPage/>          
        </Route>
        <Route path="/list">
          
        </Route>

      </Switch>
    </Router>  
    
    </div>
    
}

export default App;
