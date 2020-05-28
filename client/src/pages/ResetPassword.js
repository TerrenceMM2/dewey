import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PasswordForm } from '../components/PasswordForm/PasswordForm';
import { validateResetToken } from '../utils/deweysToolkit';

export const ResetPassword = () => {
    let { token } = useParams();

    useEffect(() => {
        validateResetToken(token);
    });

    return <PasswordForm />;
};
