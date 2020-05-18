import React from 'react';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { truncate } from '../../utils/deweysToolkit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(2, 1),
        padding: theme.spacing(2)
    }
}));

const ResultsContainer = ({ book }) => {
    const classes = useStyles();

    // TODO: TRUNCATE RESULTS

    return (
        <Card className={classes.card} key={book.isbn}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {book.bookName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {book.bookAuthor}
                </Typography>
                <Typography variant="body2">{truncate(book.bookDesc, 280)}</Typography>
            </CardContent>
            <CardActions>
                <Button>Save to Library</Button>
            </CardActions>
        </Card>
    );
};

export default ResultsContainer;
