import axios from 'axios';

export const SendLogin = (email, password) => {
    const response = axios({
        method: 'POST',
        url: '/api/user/login',
        data: { email, password }
    });
    return response;
};
