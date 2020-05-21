import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../context/contexts/UserContext';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/MenuBook';
import SettingsIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    root: {
        width: 500,
        maxWidth: '90%',
        margin: '0 auto'
    }
});

const Navigation = () => {
    const classes = useStyles();
    const history = useHistory();
    const { user, dispatch } = useContext(UserContext);
    const [value, setValue] = React.useState(0);

    const handleLogout = () => {
        try {
            dispatch({ type: 'LOGOUT', payload: {} });
            localStorage.removeItem('token');
        } catch (error) {
            console.log('Logout error', error);
        }
    };

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}>
            <BottomNavigationAction
                onClick={() => history.push('/')}
                label="Home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                onClick={() => history.push('/library')}
                label="Library"
                icon={<BookIcon />}
            />
            <BottomNavigationAction
                onClick={() => history.push('/account')}
                label="Account"
                icon={<SettingsIcon />}
            />

            <BottomNavigationAction label="Logout" icon={<LogoutIcon />} onClick={handleLogout} />
        </BottomNavigation>
    );
};

export default Navigation;
