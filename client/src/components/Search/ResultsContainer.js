import React, { useState } from 'react';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { truncate } from '../../utils/deweysToolkit';
import { makeStyles } from '@material-ui/core/styles';
import { SaveBook, CreateRelationship } from './Action';

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(2, 1),
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const ResultsContainer = ({ book }) => {
    const classes = useStyles();
    const [message, setMessage] = useState('');

    const handleSave = async () => {
        // book to save
        const bookRecord = {
            isbn: book.isbn,
            bookName: book.bookName,
            bookAuthor: book.bookAuthor,
            bookImg: book.bookImg,
            bookDesc: book.bookDesc
        };

        // save to db, get id returned
        const response = await SaveBook(book);

        // create relation between book and user
        const relationRecord = await CreateRelationship({ bookId: response.data.book.id });

        setMessage(relationRecord.data.msg);
    };

    return (
        <Card className={classes.card}>
            <CardContent style={{ width: 600, maxWidth: '80%' }}>
                <Typography variant="h5" component="h2">
                    {book.bookName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {book.bookAuthor}
                </Typography>
                <Typography variant="body2">{truncate(book.bookDesc, 280)}</Typography>
            </CardContent>
            <CardActions style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                <Button onClick={handleSave} gutterBottom>
                    Save
                </Button>
                {message && <Typography variant="caption">{message}</Typography>}
            </CardActions>
        </Card>
    );
};

export default ResultsContainer;
