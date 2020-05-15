import axios from 'axios';

export const Validate = () => {
    const response = axios({
        method: 'GET',
        url: '/api/auth/validate',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response;
};
