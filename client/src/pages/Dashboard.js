import React, { useContext } from 'react';
import { UserContext } from '../context/contexts/UserContext';
import { Redirect } from 'react-router-dom';
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
              <div>
                  <Typography variant="h3" gutterBottom>
                      Dashboard
                  </Typography>
                  <SearchForm />
              </div>
          ))
        : (content = <Redirect to="/" />);
    return <div>{content}</div>;
};
