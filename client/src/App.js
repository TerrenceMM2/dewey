import React, { useContext } from 'react';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Account } from './pages/Account';
import { Library } from './pages/Library';
import { NoMatch } from './pages/NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { PrivateRoute } from './utils/PrivateRoute';
import Navigation from './components/Navigation/Navigation';
import { UserContext } from './context/contexts/UserContext';

const App = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="App">
            <Router>
                <div style={{ padding: 10 }}>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute exact path="/library" component={Library} />
                        <PrivateRoute exact path="/account" component={Account} />
                        <Route exact component={NoMatch} />
                    </Switch>
                </div>

                {/* {user.loggedIn && <Navigation />} */}
                <Footer />
            </Router>
        </div>
    );
};

export default App;
