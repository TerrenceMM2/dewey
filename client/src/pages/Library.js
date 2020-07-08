import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

export const Library = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/user/books');

            setBooks(result.data.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography variant="h3">Library</Typography>

            {books.map(book => (
                <ul key={book.id}>
                    <li>{book.bookName}</li>
                    <li>{book.bookAuthor}</li>
                    <li>{book.bookDesc}</li>
                    <li>
                        <img src={book.bookImg} alt={`${book.bookTitle} cover`} />
                    </li>
                </ul>
            ))}
        </div>
    );
};
