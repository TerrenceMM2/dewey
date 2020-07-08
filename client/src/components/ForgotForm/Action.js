import axios from 'axios';

export const SendEmail = (email, password) => {
    const response = axios({
        method: 'POST',
        url: '/api/auth/forgotPassword',
        data: { email }
    });
    return response;
};
