import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { PasswordForm } from '../components/PasswordForm/PasswordForm';
import { validateResetToken } from '../utils/deweysToolkit';

export const ResetPassword = () => {
    const [error, setError] = useState('');
    let { token } = useParams();
    let content;

    useEffect(() => {
        const validate = async () => {
            const response = await validateResetToken(token);
            setError(response.data.error);
        };

        validate();
    });

    error ? (content = <Redirect to="/" />) : (content = <PasswordForm />);

    return <div>{content}</div>;
};
