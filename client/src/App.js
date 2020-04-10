import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components//Nav/Nav';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { NoMatch } from './pages/NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState('');

  const getTest = () => {
    const response = axios({
      method: 'GET',
      url: '/test',
    });
    return response;
  };

  useEffect(() => {
    const mountFunction = async () => {
      try {
        const response = await getTest();
        setState(response.data.msg);
      } catch (error) {
        console.log(error.response);
      }
    };
    mountFunction();
  });

  return (
    <div className="App">
      <Router>
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>{state}</p>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
