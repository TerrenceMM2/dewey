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
        fontFamily: ['Raleway', 'sans-serif'].join(',')
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
                background: 'linear-gradient(to right, #5f27cd, #7f44f2)',
                color: '#fff',
                boxShadow:
                    '-10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(95,39,205,0.3)',
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

serviceWorker.register();
