import React, { useState } from 'react';
import { Select, TextField, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SendSearch } from './Action';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    }
}));

const searchTypeOptions = ['Author', 'ISBN', 'Title'];

const SearchForm = () => {
    const classes = useStyles();

    const [searchType, setSearchType] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const handleChange = event => {
        setSearchType(event.target.value);
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
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        color="secondary"
                        style={{
                            width: 500,
                            maxWidth: '90%'
                        }}
                    />
                )}
            </FormControl>
        </div>
    );
};

export default SearchForm;
