import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { SendEmail } from './Action';
import { UserContext } from '../../context/contexts/UserContext';

// style imports
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Avatar, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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

export const ForgotForm = () => {
    const { user, dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');

    const classes = useStyles();

    const message = user.message;

    const handleForm = async e => {
        e.preventDefault();

        //     try {
        //         const response = await SendEmail(email);

        //         dispatch({ type: 'LOGIN_SUCCESS', payload: { user: response.data } });
        //         setAuthToken(localStorage.token);
        //     } catch (error) {
        //         dispatch({ type: 'LOGIN_FAILURE', payload: { message: error.response.data.data } });
        //         setPassword('');
        //         setEmail('');
        //     }
    };

    return (
        <div>
            <Grid container component="main" justify="center">
                <Grid item xs={12} sm={8} md={4}>
                    <div className={classes.paper}>
                        <img
                            src={require('../../assets/images/dewey_embarrassed.png')}
                            alt="avatar"
                            width="150"
                            style={{ padding: 30 }}
                        />
                        <Typography variant="h4" style={{ textAlign: 'center' }}>
                            Password Reset Email
                        </Typography>

                        <form
                            onSubmit={handleForm}
                            className={classes.form}
                            noValidate
                            autoComplete="off">
                            {message && <p>{message}</p>}
                            <Typography
                                variant="body1"
                                style={{ margin: '20px 0', textAlign: 'center' }}>
                                Dewey understands. Sometimes you forget.
                                <br />
                                <Typography variant="caption">
                                    <em>Dewey forgot to take out the trash this morning.</em>
                                </Typography>
                            </Typography>
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
                            <Button fullWidth className={classes.submit} type="submit">
                                Send Reset Email
                            </Button>
                        </form>

                        <Typography variant="body1" style={{ marginTop: 20 }}>
                            Have an account?{' '}
                            <Link to="/" className={classes.link}>
                                Login Here
                            </Link>
                            .
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
