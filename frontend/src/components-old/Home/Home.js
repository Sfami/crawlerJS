import React from 'react';

import './Home.scss';
// import agent from "../../agent/agent";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
// import { BrowserRouter as Router} from 'react-router-dom';

import Signup from '../Elements/SignUp';


function Home() {

  return (
    <Router>
      <div className="container">
        <Signup />
      </div>
    </Router>
  );
}

export default Home;

