import axios from 'axios';

export const SendSearch = (searchTerm, searchType) => {
    console.log(axios.defaults.headers);
    const response = axios({
        method: 'GET',
        url: `/api/book/search/${searchTerm}?searchType=${searchType}`
    });

    return response;
};
