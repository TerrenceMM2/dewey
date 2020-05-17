import axios from 'axios';

export const SendSearch = (searchType, searchTerm) => {
    const response = axios({
        method: 'POST',
        url: `/api/book/${searchTerm}?searchType=${searchType}`
    });
    return response;
};
