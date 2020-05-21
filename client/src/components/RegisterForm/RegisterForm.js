import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { UserContext } from '../../context/contexts/UserContext';
import { SendRegister } from './Action';
import Select from '@material-ui/core/Select';

import PasswordStrengthBar from 'react-password-strength-bar';
import {
    validateRegistrationStepOne,
    validateRegistrationStepTwo,
    validateRegistrationStepThree
} from '../../utils/deweysToolkit';

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
    const [securityAnswer1, setSecurityAnswer1] = useState('');
    const [securityAnswer2, setSecurityAnswer2] = useState('');
    const [securityAnswer3, setSecurityAnswer3] = useState('');
    const [securityQuestion1, setSecurityQuestion1] = useState('What is your favorite book?');
    const [securityQuestion2, setSecurityQuestion2] = useState(
        'What was the name of your first pet?'
    );
    const [securityQuestion3, setSecurityQuestion3] = useState('Where were you born?');
    const [registrationStep, setRegistrationStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const classes = useStyles();

    const auth = user.loggedIn;
    const registered = user.registered;
    let message = user.message;
    let content;

    const handleForm = async e => {
        e.preventDefault();
        try {
            const response = await SendRegister(
                firstName,
                lastName,
                email,
                password,
                securityAnswer1,
                securityAnswer2,
                securityAnswer3,
                securityQuestion1,
                securityQuestion2,
                securityQuestion3
            );
            dispatch({ type: 'REGISTER_SUCCESS', payload: { message: response.data.data } });
        } catch (error) {
            dispatch({
                type: 'REGISTER_FAILURE',
                payload: { message: error.response.data.data }
            });
        }
    };

    const handleStepOne = async () => {
        const res = await validateRegistrationStepOne(firstName, lastName, email);

        if (!res.isValid) {
            setValidationErrors(res.errors);
        } else {
            setValidationErrors({});
            setRegistrationStep(registrationStep + 1);
        }
    };

    const handleStepTwo = async () => {
        const res = await validateRegistrationStepTwo(password, match);

        if (!res.isValid) {
            setValidationErrors(res.errors);
        } else {
            setValidationErrors({});
            setRegistrationStep(registrationStep + 1);
        }
    };

    const handleStepThree = async () => {
        const res = await validateRegistrationStepThree(
            securityAnswer1,
            securityAnswer2,
            securityAnswer3
        );

        if (!res.isValid) {
            setValidationErrors(res.errors);
        } else {
            setValidationErrors({});
            setRegistrationStep(registrationStep + 1);
        }
    };

    const renderPasswordDisplay = () => {
        return showPassword ? password : password.replace(/./g, '*');
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
                            error={validationErrors.firstName}
                            helperText={validationErrors.firstName && validationErrors.firstName}
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
                            error={validationErrors.lastName}
                            helperText={validationErrors.lastName && validationErrors.lastName}
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
                            error={validationErrors.email}
                            helperText={validationErrors.email && validationErrors.email}
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
                            error={validationErrors.password}
                            helperText={validationErrors.password && validationErrors.password}
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
                            error={validationErrors.match}
                            helperText={validationErrors.match && validationErrors.match}
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
                        <Typography variant="subtitle1" gutterBottom>
                            Dewey likes to keep things secure, and he'll help you get a new password
                            if you forget it. Go ahead and tell him the answers to the following
                            questions.
                        </Typography>
                        <Typography variant="body1">{securityQuestion1}</Typography>
                        <TextField
                            error={validationErrors.securityAnswer1}
                            helperText={
                                validationErrors.securityAnswer1 && validationErrors.securityAnswer1
                            }
                            required
                            fullWidth
                            margin="normal"
                            color="secondary"
                            variant="outlined"
                            type="text"
                            label="Security Question #1"
                            value={securityAnswer1}
                            onChange={e => setSecurityAnswer1(e.target.value)}
                            style={{ marginBottom: 20 }}
                        />

                        <Typography variant="body1">{securityQuestion2}</Typography>
                        <TextField
                            error={validationErrors.securityAnswer2}
                            helperText={
                                validationErrors.securityAnswer2 && validationErrors.securityAnswer2
                            }
                            required
                            fullWidth
                            margin="normal"
                            color="secondary"
                            variant="outlined"
                            type="text"
                            label="Security Question #2"
                            value={securityAnswer2}
                            onChange={e => setSecurityAnswer2(e.target.value)}
                            style={{ marginBottom: 20 }}
                        />

                        <Typography variant="body1">{securityQuestion3}</Typography>
                        <TextField
                            error={validationErrors.securityAnswer3}
                            helperText={
                                validationErrors.securityAnswer3 && validationErrors.securityAnswer3
                            }
                            required
                            fullWidth
                            margin="normal"
                            color="secondary"
                            variant="outlined"
                            type="text"
                            label="Security Question #3"
                            value={securityAnswer3}
                            onChange={e => setSecurityAnswer3(e.target.value)}
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
                        <Typography variant="subtitle1" gutterBottom>
                            Roarrr! I think we're ready to get started.
                        </Typography>
                        <Typography variant="body1">
                            <strong>First name:</strong> {firstName}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Last name:</strong> {lastName}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Email:</strong> {email}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Password:</strong> {renderPasswordDisplay()}
                            <span
                                style={{
                                    color: '#5f27cd',
                                    fontSize: '0.6rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    marginLeft: 10,
                                    cursor: 'pointer'
                                }}
                                onClick={() => setShowPassword(!showPassword)}>
                                {' '}
                                {showPassword ? 'hide' : 'show'}{' '}
                            </span>
                        </Typography>
                        <Typography variant="body1">
                            <strong>{securityQuestion1}:</strong> {securityAnswer1}
                        </Typography>
                        <Typography variant="body1">
                            <strong>{securityQuestion2}:</strong> {securityAnswer2}
                        </Typography>
                        <Typography variant="body1">
                            <strong>{securityQuestion3}:</strong> {securityAnswer3}
                        </Typography>

                        <Button fullWidth className={classes.submit} onClick={handleForm}>
                            Confirm & Register
                        </Button>
                        <Button
                            className={classes.submit}
                            onClick={() => setRegistrationStep(registrationStep - 1)}>
                            Back
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

                        <form className={classes.form} noValidate autoComplete="off">
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
