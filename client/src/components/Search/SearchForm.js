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
import ResultsContainer from './ResultsContainer';
import { makeStyles } from '@material-ui/core/styles';
import { SendSearch } from './Action';

import Scanner from './Scanner';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            width: '25ch',
            margin: theme.spacing(0, 2, 0, 0)
        }
    }
}));

const SearchForm = () => {
    const classes = useStyles();

    const [undetectedMessage, setUndetectedMessage] = useState('');
    const [searchType, setSearchType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    const [results, setResults] = useState('');

    const handleDetected = result => {
        if (!result) {
            return null;
        }

        if (!result.success) {
            console.log(result);
            setUndetectedMessage(
                'Your volume could not be found via scan. Please try a manual search.'
            );
        } else {
            setSearchType('isbn');
            setSearchTerm(result.codeResult.code);
            console.log(result.codeResult.code);
        }
    };

    const handleChange = event => {
        setSearchType(event.target.value);
    };

    const handleSearch = async event => {
        setUndetectedMessage('');
        setBooks([]);
        try {
            const response = await SendSearch(searchTerm, searchType);
            console.log(searchTerm, searchType);
            setBooks(response.data.data);
        } catch (error) {
            // @TODO: HANDLE ERROR
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

            <Typography variant="body1">{undetectedMessage && undetectedMessage}</Typography>
            <Scanner handleDetected={handleDetected} />

            {books.length > 0 && (
                <Typography variant="body1">Search results: {books.length}</Typography>
            )}

            {books.map(book => {
                return <ResultsContainer book={book} />;
            })}
        </div>
    );
};

export default SearchForm;
