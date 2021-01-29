import React from 'react';
import Header from "./components/Header";
import "./components/css/App.css";
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login.js"

function App(){
    return( <div className="app">
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>

    </div>
    )
}

export default App;
