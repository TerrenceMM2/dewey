import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { NoMatch } from './pages/NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './context/contexts/UserContext';
import { PrivateRoute } from './utils/PrivateRoute';

const App = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <Route exact component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
