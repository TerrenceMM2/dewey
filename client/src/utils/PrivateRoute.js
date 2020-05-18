import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Validate } from './Validate';
import { Login } from '../pages/Login';
import { UserContext } from '../context/contexts/UserContext';

export const PrivateRoute = ({ path, component }) => {
    const { user, dispatch } = useContext(UserContext);
    const auth = user.loggedIn;

    // useEffect(() => {
    //     const sendValidation = async () => {
    //         try {
    //             await Validate();
    //             dispatch({ type: 'VALIDATION_SUCCESS' });
    //         } catch (error) {
    //             dispatch({
    //                 type: 'VALIDATION_FAILURE',
    //                 payload: { error: `Please sign in to visit the page '${path}'.` }
    //             });
    //         }
    //     };

    //     sendValidation();
    // }, [dispatch, path]);

    return auth ? (
        <Route exact path={path} component={component} />
    ) : (
        <Redirect to="/" component={Login} />
    );
};
