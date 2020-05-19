import React, { useContext } from 'react';
import { UserContext } from '../context/contexts/UserContext';
import { Redirect, Link } from 'react-router-dom';
import ScannerContainer from '../components/Scanner/ScannerContainer';
import SearchForm from '../components/Search/SearchForm';

// style imports
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
        cursor: 'pointer'
    }
}));

export const Dashboard = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;

    let content;

    const classes = useStyles();

    auth
        ? (content = (
              <div
                  style={{
                      padding: 30
                  }}>
                  {/* <ScannerContainer /> */}
                  <Typography>
                      <Link to="/account" className={classes.link}>
                          Update Account
                      </Link>
                  </Typography>
                  <Typography variant="h3">Dashboard</Typography>

                  <SearchForm />
              </div>
          ))
        : (content = <Redirect to="/" />);
    return <div>{content}</div>;
};
