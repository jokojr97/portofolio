import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './page/home';
import Login from './page/login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
