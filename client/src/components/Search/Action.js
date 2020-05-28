import axios from 'axios';

export const SendSearch = (searchTerm, searchType) => {
    const response = axios({
        method: 'GET',
        url: `/api/book/search/${searchTerm}?searchType=${searchType}`
    });

    return response;
};

export const SaveBook = book => {
    const response = axios({
        method: 'POST',
        url: `/api/book/create`,
        data: book
    });

    return response;
};

export const CreateRelationship = bookId => {
    const response = axios({
        method: 'POST',
        url: `/api/book`,
        data: bookId
    });

    return response;
};
