import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { ResetForm } from '../components/ResetForm/ResetForm';
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

    error
        ? (content = <Redirect to="/" />)
        : (content = (
              <div>
                  <ResetForm token={token} />
              </div>
          ));

    return <div>{content}</div>;
};
