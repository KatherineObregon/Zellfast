import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import Login from "./Login.js"

function App() {
  return (
    <div className="App">

        <Router>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Router>
    </div>
  );
}

export default App;
