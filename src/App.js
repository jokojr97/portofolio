import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Home from './page/home';
import Login from './page/login';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from "react-router-dom";
import Portofolio from './page/portofolio';
import NotFound from './page/Notfound';
import { Spinner } from 'react-bootstrap';
// import { AOS } from 'aos';

function App() {
  const [ready, setReady] = React.useState(false);
  useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    setTimeout(() => {
      setReady(true);
    }, 200)
  })
  return (
    <React.Fragment>
      {!ready ? <center><Spinner style={{ marginTop: "20%" }} animation="border" /> </center> :
        <Router>
          <Switch>
            <Route path="/" exact element={<Home />} />
            <Route path="/portofolio" exact element={<Portofolio />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="*" exact={true} element={<NotFound />} />
          </Switch>
        </Router>
      }
    </React.Fragment>
  );
  setReady(true);
}

export default App;
