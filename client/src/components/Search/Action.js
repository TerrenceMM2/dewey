import axios from 'axios';

export const SendSearch = (searchTerm, searchType) => {
    const response = axios({
        method: 'GET',
        url: `/api/book/search/${searchTerm}/${searchType}`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    return response;
};
