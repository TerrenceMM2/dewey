import React, { useState } from 'react';
import {
    Select,
    TextField,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
    Typography
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { SendSearch } from './Action';
import { truncate } from '../../utils/deweysToolkit';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    },
    card: {
        margin: theme.spacing(2, 1),
        padding: theme.spacing(2)
    },
    resultsCount: {
        margin: theme.spacing(1)
    }
}));

const searchTypeOptions = ['Author', 'ISBN', 'Title'];

const SearchForm = () => {
    const classes = useStyles();

    const [searchType, setSearchType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    const handleChange = event => {
        setSearchType(event.target.value);
    };

    const handleSearch = async event => {
        try {
            const response = await SendSearch(searchTerm, searchType);
            setBooks(response.data.data);
        } catch (error) {
            // dispatch({ type: 'LOGIN_FAILURE', payload: { message: error.response.data.data } });
            console.log('error', error);
        }
    };

    return (
        <div className={classes.searchWrapper}>
            <FormControl
                fullWidth
                className={classes.root}
                variant="outlined"
                color="secondary"
                noValidate
                autoComplete="off"
                style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <InputLabel id="search-type">Search type</InputLabel>
                <Select
                    label="Search type"
                    labelId="search-type"
                    id="search-type"
                    value={searchType}
                    onChange={handleChange}>
                    <MenuItem value="isbn">ISBN</MenuItem>
                    <MenuItem value="author">Author name</MenuItem>
                    <MenuItem value="title">Book title</MenuItem>
                </Select>

                {searchType !== '' && (
                    <>
                        <TextField
                            id="outlined-basic"
                            label="Search"
                            variant="outlined"
                            color="secondary"
                            onChange={e => setSearchTerm(e.target.value)}
                            value={searchTerm}
                            style={{
                                width: 500,
                                maxWidth: '90%'
                            }}
                        />
                        <Button className={classes.submit} onClick={handleSearch}>
                            Search
                        </Button>
                    </>
                )}
            </FormControl>

            {books.length > 0 && (
                <Typography className={classes.resultsCount} variant="body1">
                    Search results: {books.length}
                </Typography>
            )}
            {books.map(book => {
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
            })}
        </div>
    );
};

export default SearchForm;
