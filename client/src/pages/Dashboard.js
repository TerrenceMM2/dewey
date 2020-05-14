import React, { useContext } from 'react';
import { UserContext } from '../context/contexts/UserContext';
import { Redirect } from 'react-router-dom';
import ScannerContainer from '../components/Scanner/ScannerContainer';

export const Dashboard = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    auth
        ? (content = (
              <div>
                  <ScannerContainer />
                  <h3>Dashboard</h3>
              </div>
          ))
        : (content = <Redirect to="/" />);
    return <div>{content}</div>;
};
