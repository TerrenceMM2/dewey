import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { UserContext } from '../../context/contexts/UserContext';
import { SendRegister } from './Action';

// style imports
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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

export const RegisterForm = () => {
    const { user, dispatch } = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [match, setMatch] = useState('');

    const classes = useStyles();

    const auth = user.loggedIn;
    const registered = user.registered;
    let message = user.message;
    let content;

    const handleForm = async e => {
        e.preventDefault();

        if (password === match) {
            try {
                const response = await SendRegister(firstName, lastName, email, password);
                dispatch({ type: 'REGISTER_SUCCESS', payload: { message: response.data.data } });
            } catch (error) {
                dispatch({
                    type: 'REGISTER_FAILURE',
                    payload: { message: error.response.data.data }
                });
                setPassword('');
                setMatch('');
            }
        } else {
            dispatch({ type: 'REGISTER_FAILURE', payload: { message: "Passwords don't match." } });
            setPassword('');
            setMatch('');
        }
    };

    if (auth) {
        content = <Redirect to="/" />;
    } else if (registered) {
        content = <Redirect to="/" />;
    } else {
        content = (
            <Grid container component="main" justify="center">
                <Grid item xs={12} sm={8} md={4}>
                    <div className={classes.paper}>
                        <img
                            src={require('../../assets/images/avatar.png')}
                            alt="avatar"
                            width="150"
                            style={{ padding: 30 }}
                        />
                        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
                            Welcome!
                        </Typography>
                        <Typography variant="subtitle" gutterBottom>
                            Enter your details below to get started.
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
                                type="text"
                                label="First name"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                            <TextField
                                required
                                fullWidth
                                margin="normal"
                                color="secondary"
                                variant="outlined"
                                type="text"
                                label="Last name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                            <TextField
                                required
                                fullWidth
                                margin="normal"
                                color="secondary"
                                variant="outlined"
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />{' '}
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
                                Login
                            </Button>
                        </form>

                        <Typography variant="body1" style={{ marginTop: 20 }}>
                            Already have an account?{' '}
                            <Link to="/" className={classes.link}>
                                Login
                            </Link>
                            .
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        );
    }

    return <div>{content}</div>;
};
