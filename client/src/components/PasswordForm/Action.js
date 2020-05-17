import axios from 'axios';

export const SendPassword = password => {
    const response = axios({
        method: 'PATCH',
        url: '/api/auth/password',
        data: {
            password
        }
    });
    return response;
};
