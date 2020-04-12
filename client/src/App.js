import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { Nav } from './components/Nav/Nav';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { NoMatch } from './pages/NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './context/contexts/UserContext';

const App = () => {
    const [state, setState] = useState('');
    const { user } = useContext(UserContext);

    const getTest = () => {
        const response = axios({
            method: 'GET',
            url: '/test'
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
    }, [user]);

    return (
        <div className="App">
            <p>{state}</p>
            <Router>
                <Nav />
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
