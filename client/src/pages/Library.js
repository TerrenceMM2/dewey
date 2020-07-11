import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StackGrid from 'react-stack-grid';

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(2, 1),
        padding: theme.spacing(1)
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const Library = () => {
    const classes = useStyles();
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

            <StackGrid columnWidth={300}>
                {books.map(book => (
                    <Card className={classes.card} key={book.id}>
                        <CardContent className={classes.cardContent}>
                            <img src={book.bookImg} alt={`${book.bookTitle} cover`} />
                            <p>{book.bookName}</p>
                            <Typography color="textSecondary">
                                {JSON.parse(book.bookAuthor).join(', ')}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </StackGrid>
        </div>
    );
};
