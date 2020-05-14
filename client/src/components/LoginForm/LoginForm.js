import React, { useContext, useState } from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
import { UserContext } from '../../context/contexts/UserContext';
import { SendLogin } from './Action';

// style imports
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Paper, Avatar, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.main
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    image: {
        backgroundImage: `url(${require('../../assets/images/library.jpeg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export const LoginForm = () => {
    const { user, dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    const auth = user.loggedIn;
    const message = user.message;
    let content;

    const handleForm = async e => {
        e.preventDefault();

        try {
            const response = await SendLogin(email, password);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { token: response.data.token } });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: { error: error.response.data.data } });
            setPassword('');
        }
    };

    auth
        ? (content = <Redirect to="/dashboard" />)
        : (content = (
              <Grid container component="main" className={classes.root}>
                  <Grid item xs={false} sm={4} md={7} className={classes.image} />
                  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
                      <div className={classes.paper}>
                          <Avatar className={classes.avatar}>
                              <LockOutlinedIcon />
                          </Avatar>
                          <Typography component="h1" variant="h4">
                              Welcome to Dewey
                          </Typography>
                          <form
                              onSubmit={handleForm}
                              className={classes.form}
                              noValidate
                              autoComplete="off">
                              {message && <p>{message}</p>}

                              <TextField
                                  required
                                  fullWidth
                                  autoFocus
                                  margin="normal"
                                  color="secondary"
                                  variant="outlined"
                                  type="email"
                                  label="Email address"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                              />
                              <br />
                              <TextField
                                  required
                                  fullWidth
                                  color="secondary"
                                  variant="outlined"
                                  type="password"
                                  label="Password"
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                              />
                              <br />
                              <Button fullWidth className={classes.submit} type="submit">
                                  Login
                              </Button>
                          </form>

                          <p style={{ textAlign: 'center' }}>Forgot password?</p>

                          <p style={{ textAlign: 'center' }}>
                              Don't have an account?{' '}
                              <Link to="/register" className={classes.link}>
                                  Sign up
                              </Link>
                          </p>
                      </div>
                  </Grid>
              </Grid>
          ));

    return <div>{content}</div>;
};
