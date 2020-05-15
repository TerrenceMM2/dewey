import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    const getCopyrightYears = () => {
        return `${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`;
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#5f27cd',
                color: '#fff',
                marginTop: 30,
                padding: 30
            }}>
            <div>
                <Typography variant="h2" gutterBottom>
                    Dewey
                </Typography>
            </div>
            <hr style={{ borderColor: 'rgba(255,255,255,0.7', width: '50%', marginLeft: 0 }} />
            <div>
                <img
                    src={require('../../assets/images/dewey_sick.png')}
                    height="100"
                    width="100"
                    alt="writing dino"
                />
                <Typography variant="body2" display="block" gutterBottom>
                    The boring legal stuff...not even Dewey enjoys this...
                </Typography>
                <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    style={{ color: 'rgba(255,255,255,0.7' }}>
                    Icons made by <em>Freepik</em> from{' '}
                    <a style={{ color: 'rgba(255,255,255,0.7' }} href="https://www.flaticon.com">
                        www.flaticon.com
                    </a>
                    .
                </Typography>
                <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    style={{ color: 'rgba(255,255,255,0.7' }}>
                    &copy; {getCopyrightYears()} |Terrence Mahnken, Pete Wanca, Alec Down. All
                    Rights Reserved.
                </Typography>
            </div>
        </div>
    );
};

export default Footer;
