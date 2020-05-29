import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { UserContext } from '../../context/contexts/UserContext';
import { SendPassword } from './Action';

// style imports
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.main
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
    },
    cancel: {
        margin: theme.spacing(3, 0, 2),
        float: 'right'
    }
}));

export const ResetForm = props => {
    const { user, dispatch } = useContext(UserContext);
    const token = props.token;
    const [password, setPassword] = useState('');
    const [match, setMatch] = useState('');
    const [success, setSuccess] = useState('');
    const [message, setMessage] = useState('');

    const classes = useStyles();

    let content;

    const handleForm = async e => {
        e.preventDefault();

        if (password === match) {
            try {
                const response = await SendPassword(password, token);
                setMessage(response.data.msg);
                setPassword('');
                setMatch('');
                setSuccess(true);
            } catch (error) {
                setMessage(error.response.data.msg);
                setPassword('');
                setMatch('');
            }
        } else {
            setMessage("Passwords don't match.");
            setPassword('');
            setMatch('');
        }
    };

    !success
        ? (content = (
              <div>
                  <Typography variant="h5" gutterBottom style={{ textAlign: 'left' }}>
                      Update Password
                  </Typography>
                  <form
                      onSubmit={handleForm}
                      className={classes.form}
                      noValidate
                      autoComplete="off">
                      <TextField
                          required
                          fullWidth
                          autoFocus
                          margin="normal"
                          color="secondary"
                          variant="outlined"
                          type="password"
                          label="Password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                      />
                      <TextField
                          required
                          fullWidth
                          margin="normal"
                          color="secondary"
                          variant="outlined"
                          type="password"
                          label="Confirm password"
                          value={match}
                          onChange={e => setMatch(e.target.value)}
                      />
                      <br />
                      <Button fullWidth className={classes.submit} type="submit">
                          Update
                      </Button>
                  </form>
              </div>
          ))
        : (content = (
              <Typography variant="body1" style={{ marginTop: 20 }}>
                  <Link to="/" className={classes.link}>
                      Return to Login
                  </Link>
                  .
              </Typography>
          ));

    return (
        <div>
            {content}
            {message && <p>{message}</p>}
        </div>
    );
};
