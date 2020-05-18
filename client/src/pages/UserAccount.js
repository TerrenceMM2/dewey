import React, { useContext, useState } from 'react';
import { UserContext } from '../context/contexts/UserContext';
import { Redirect, Link } from 'react-router-dom';
import { PasswordForm } from '../components/PasswordForm/PasswordForm';

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

export const UserAccount = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;

    let content;

    const classes = useStyles();

    auth
        ? (content = (
              <div>
                  <h3>Update Account</h3>
                  <Typography>
                      <Link to="/dashboard" className={classes.link}>
                          Dashboard
                      </Link>
                  </Typography>
                  <PasswordForm />
              </div>
          ))
        : (content = <Redirect to="/" />);
    return <div>{content}</div>;
};
