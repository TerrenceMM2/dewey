import axios from 'axios';

export const SendPassword = (password, token) => {
    const response = axios({
        method: 'PATCH',
        url: '/api/auth/reset',
        params: {
            resetToken: token
        },
        data: {
            password
        }
    });
    return response;
};
