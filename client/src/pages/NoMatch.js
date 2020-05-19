import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import '../assets/css/animation.css';

export const NoMatch = () => {
    const history = useHistory();

    return (
        <div
            style={{
                paddingTop: 50,
                paddingBottom: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            <div style={{ fontSize: 200 }}>
                4
                <img
                    src={require('../assets/images/dewey_crying.png')}
                    height="200"
                    className="error-dewey"
                    alt="crying dinosaur logo"
                />
                4
            </div>
            <div>
                <Typography variant="h4" style={{ marginTop: 30, textAlign: 'center' }}>
                    Error: 404 page not found.
                </Typography>
                <Typography variant="subtitle1" style={{ marginBottom: 30, textAlign: 'center' }}>
                    Sorry, Dewey can't find that page.
                </Typography>
                <Button fullWidth onClick={() => history.push('/')}>
                    Go back home
                </Button>
            </div>
        </div>
    );
};
