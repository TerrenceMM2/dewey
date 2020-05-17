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
    },
    cancel: {
        margin: theme.spacing(3, 0, 2),
        float: 'right'
    }
}));

export const PasswordForm = props => {
    const { user, dispatch } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [match, setMatch] = useState('');

    const classes = useStyles();

    const auth = user.loggedIn;
    let message = user.message;
    let content;

    const handleForm = async e => {
        e.preventDefault();

        if (password === match) {
            try {
                const response = await SendPassword(password);
                dispatch({
                    type: 'UPDATE_PASSWORD_SUCCESS',
                    payload: { message: response.data.data }
                });
            } catch (error) {
                dispatch({
                    type: 'UPDATE_PASSWORD_FAILURE',
                    payload: { message: error.response }
                });
                setPassword('');
                setMatch('');
            }
        } else {
            dispatch({
                type: 'UPDATE_PASSWORD_FAILURE',
                payload: { message: "Passwords don't match." }
            });
            setPassword('');
            setMatch('');
        }
    };

    content = (
        <Grid container component="main" justify="center">
            <Grid item xs={12} sm={8} md={4}>
                <div className={classes.paper}>
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                        Update Password
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
                            margin="normal"
                            color="secondary"
                            variant="outlined"
                            type="password"
                            label="Password"
                            size="small"
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
                            size="small"
                            value={match}
                            onChange={e => setMatch(e.target.value)}
                        />
                        <br />
                        <Button fullWidth className={classes.submit} type="submit">
                            Update
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );

    return <div>{content}</div>;
};
