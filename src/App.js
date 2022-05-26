import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './page/home';
import Login from './page/login';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from "react-router-dom";
import Portofolio from './page/portofolio';
import NotFound from './page/Notfound';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/portofolio" exact element={<Portofolio />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
