import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { UserContext } from '../../context/contexts/UserContext';
import { SendRegister } from './Action';
import Select from '@material-ui/core/Select';

import PasswordStrengthBar from 'react-password-strength-bar';

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
        margin: theme.spacing(3, 0, 2),
        marginRight: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

export const RegisterForm = () => {
    const { user, dispatch } = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [match, setMatch] = useState('');
    const [securityOne, setSecurityOne] = useState('');
    const [securityTwo, setSecurityTwo] = useState('');
    const [securityThree, setSecurityThree] = useState('');
    const [securityOneQuestion, setSecurityOneQuestion] = useState('What is your favorite book?');
    const [securityTwoQuestion, setSecurityTwoQuestion] = useState(
        'What was the name of your first pet?'
    );
    const [securityThreeQuestion, setSecurityThreeQuestion] = useState('Where were you born?');
    const [registrationStep, setRegistrationStep] = useState(1);

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

    const handleStepOne = () => {
        if (!firstName) {
            alert('no firstname');
        } else if (!lastName) {
            alert('no lastname');
        } else if (!email) {
            alert('no email');
        } else {
            setRegistrationStep(registrationStep + 1);
        }
    };

    const handleStepTwo = () => {
        if (!password) {
            alert('no password');
        } else if (!match) {
            alert('no match');
        } else if (password !== match) {
            alert('pwds dont match');
        } else {
            setRegistrationStep(registrationStep + 1);
        }
    };

    const handleStepThree = () => {
        setRegistrationStep(registrationStep + 1);
    };

    const renderSwitchContent = registrationStep => {
        switch (registrationStep) {
            case 1:
                return (
                    <>
                        <Typography variant="body1" gutterBottom>
                            Enter your details below to get started.
                        </Typography>
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
                        />

                        <Button className={classes.submit} onClick={handleStepOne}>
                            Continue
                        </Button>

                        <Typography variant="body1" style={{ marginTop: 20 }}>
                            Already have an account?{' '}
                            <Link to="/" className={classes.link}>
                                Login
                            </Link>
                            .
                        </Typography>
                    </>
                );
            case 2:
                return (
                    <>
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
                        <PasswordStrengthBar
                            password={password}
                            scoreWords={[
                                '',
                                "Password strength: Dewey doesn't like it!",
                                'Password strength: Dewey will tolerate it.',
                                'Password strength: Dewey likes it.',
                                'Password strength: Dewey is love with your password. 🦖'
                            ]}
                            shortScoreWord="Password strength: Dewey doesn't like it!"
                        />
                        <TextField
                            error={match !== password && match !== ''}
                            helperText={
                                match !== password && match !== '' && 'Passwords do not match.'
                            }
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
                        <Button
                            className={classes.submit}
                            onClick={() => setRegistrationStep(registrationStep - 1)}>
                            Back
                        </Button>

                        <Button className={classes.submit} onClick={handleStepTwo}>
                            Continue
                        </Button>
                    </>
                );
            case 3:
                return (
                    <>
                        <Typography variant="subtitle" gutterBottom>
                            Dewey likes to keep things secure, and he'll help you get a new password
                            if you forget it. Go ahead and tell him the answers to the following
                            questions.
                        </Typography>
                        <Typography variant="body1">{securityOneQuestion}</Typography>
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            color="secondary"
                            variant="outlined"
                            type="text"
                            label="Security Question #1"
                            value={securityOne}
                            onChange={e => setSecurityOne(e.target.value)}
                            style={{ marginBottom: 20 }}
                        />

                        <Typography variant="body1">{securityTwoQuestion}</Typography>
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            color="secondary"
                            variant="outlined"
                            type="text"
                            label="Security Question #2"
                            value={securityTwo}
                            onChange={e => setSecurityTwo(e.target.value)}
                            style={{ marginBottom: 20 }}
                        />

                        <Typography variant="body1">{securityThreeQuestion}</Typography>
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            color="secondary"
                            variant="outlined"
                            type="text"
                            label="Security Question #3"
                            value={securityThree}
                            onChange={e => setSecurityThree(e.target.value)}
                            style={{ marginBottom: 20 }}
                        />
                        <Button
                            className={classes.submit}
                            onClick={() => setRegistrationStep(registrationStep - 1)}>
                            Back
                        </Button>

                        <Button className={classes.submit} onClick={handleStepThree}>
                            Continue
                        </Button>
                    </>
                );
            case 4:
                return (
                    <>
                        <Typography variant="body1">
                            Name: {firstName} {lastName}
                        </Typography>
                        <Typography variant="body1">Email: {email}</Typography>
                        <Typography variant="body1">Password: {password}</Typography>
                        <Typography variant="body1">Question #1: {securityTwo}</Typography>
                        <Typography variant="body1">Question #2: {securityTwo}</Typography>
                        <Typography variant="body1">Question #3: {securityThree}</Typography>
                        <Button
                            className={classes.submit}
                            onClick={() => setRegistrationStep(registrationStep - 1)}>
                            Back
                        </Button>
                        <Button fullWidth className={classes.submit} type="submit">
                            Register
                        </Button>
                    </>
                );
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
                        />
                        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
                            Welcome!
                        </Typography>

                        <form
                            onSubmit={handleForm}
                            className={classes.form}
                            noValidate
                            autoComplete="off">
                            {message && <p>{message}</p>}
                            {renderSwitchContent(registrationStep)}
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }

    return <div>{content}</div>;
};
