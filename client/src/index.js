import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserContextProvider } from './context/contexts/UserContext';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ['Roboto', 'sans-serif'].join(',')
    },
    palette: {
        primary: {
            main: '#576574'
        },
        secondary: {
            main: '#5f27cd'
        }
    },
    overrides: {
        MuiButton: {
            text: {
                backgroundColor: '#5f27cd',
                color: '#fff',
                boxShadow: 'none',
                padding: '10px 20px',
                marginBottom: '10px',
                '&:hover': {
                    backgroundColor: '#341f97'
                }
            }
        }
    }
});

ReactDOM.render(
    <UserContextProvider>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </UserContextProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
