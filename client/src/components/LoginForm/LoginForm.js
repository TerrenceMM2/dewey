import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { UserContext } from '../../context/contexts/UserContext';
import { SendLogin } from './Action';

// style imports
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Avatar, Typography } from '@material-ui/core';
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
        margin: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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
              <Grid container component="main" className={classes.root} justify="center">
                  <Grid item xs={12} sm={8} md={4}>
                      <div className={classes.paper}>
                          <img
                              src={require('../../assets/images/avatar.png')}
                              alt="avatar"
                              width="150"
                              style={{ padding: 30 }}
                          />
                          <Avatar className={classes.avatar}>
                              <LockOutlinedIcon />
                          </Avatar>
                          <Typography variant="h4" style={{ textAlign: 'center' }}>
                              Welcome back!
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
                              <TextField
                                  required
                                  fullWidth
                                  margin="normal"
                                  color="secondary"
                                  variant="outlined"
                                  type="password"
                                  label="Password"
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                              />
                              <Button fullWidth className={classes.submit} type="submit">
                                  Login
                              </Button>
                          </form>

                          <Typography variant="body1" style={{ marginTop: 20 }}>
                              Forgot password?
                          </Typography>

                          <Typography variant="body1" style={{ marginTop: 20 }}>
                              Don't have an account?{' '}
                              <Link to="/register" className={classes.link}>
                                  Sign up
                              </Link>
                              .
                          </Typography>
                      </div>
                  </Grid>
              </Grid>
          ));

    return <div>{content}</div>;
};
