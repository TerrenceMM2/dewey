import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { ResetForm } from '../components/ResetForm/ResetForm';
import { validateResetToken } from '../utils/deweysToolkit';

// style imports
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    }
}));

export const ResetPassword = () => {
    const [error, setError] = useState('');
    let { token } = useParams();
    let content;

    const classes = useStyles();

    useEffect(() => {
        const validate = async () => {
            const response = await validateResetToken(token);
            setError(response.data.error);
        };

        validate();
    });

    error
        ? (content = <Redirect to="/" />)
        : (content = (
              <Grid container component="main" justify="center">
                  <Grid item xs={12} sm={8} md={4}>
                      <div className={classes.paper}>
                          <img
                              src={require('../assets/images/dewey_writing.png')}
                              alt="avatar"
                              width="150"
                              style={{ padding: 30 }}
                          />
                          <ResetForm token={token} />
                      </div>
                  </Grid>
              </Grid>
          ));

    return <div>{content}</div>;
};
