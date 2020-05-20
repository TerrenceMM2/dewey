import React, { useContext } from 'react';
import { UserContext } from '../context/contexts/UserContext';
import { Redirect } from 'react-router-dom';
import { PasswordForm } from '../components/PasswordForm/PasswordForm';

// style imports
import { Typography } from '@material-ui/core';

export const Account = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;

    let content;

    auth
        ? (content = (
              <div>
                  <Typography variant="h3">Account</Typography>
                  <PasswordForm />
              </div>
          ))
        : (content = <Redirect to="/" />);
    return <div>{content}</div>;
};
