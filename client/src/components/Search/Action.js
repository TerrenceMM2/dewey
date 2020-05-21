import axios from 'axios';

export const SendSearch = (searchTerm, searchType) => {
    const response = axios({
        method: 'GET',
        url: `/api/book/search/${searchTerm}?searchType=${searchType}`
    });

    return response;
};
