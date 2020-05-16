import React, { useContext } from 'react';
import { UserContext } from '../context/contexts/UserContext';
import { Redirect } from 'react-router-dom';
import ScannerContainer from '../components/Scanner/ScannerContainer';
import SearchForm from '../components/Search/SearchForm';
import { Typography } from '@material-ui/core';

export const Dashboard = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    auth
        ? (content = (
              <div
                  style={{
                      padding: 30
                  }}>
                  <ScannerContainer />
                  <Typography variant="h3">Dashboard</Typography>

                  <SearchForm />
              </div>
          ))
        : (content = <Redirect to="/" />);
    return <div>{content}</div>;
};
