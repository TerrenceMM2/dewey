import axios from 'axios';

export const SendPassword = (password, token) => {
    const response = axios({
        method: 'PATCH',
        url: '/api/auth/password',
        headers: {
            Authorization: token
        },
        data: {
            password
        }
    });
    return response;
};
