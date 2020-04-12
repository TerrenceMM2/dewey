import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/contexts/UserContext';
import { SendLogin } from './Action';

export const LoginForm = () => {
    const { user, dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = user.loggedIn;
    const message = user.message;
    let content;

    const handleForm = async e => {
        e.preventDefault();

        try {
            const response = await SendLogin(email, password);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { token: response.data.token } });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: { error: error.response.data.data } });
            setPassword('');
        }
    };

    auth
        ? (content = <Redirect to="/dashboard" />)
        : (content = (
              <form onSubmit={handleForm}>
                  <p>{message}</p>
                  <fieldset>
                      <input
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                      />
                      <br />
                      <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                      />
                      <br />
                      <button type="submit">Submit</button>
                  </fieldset>
              </form>
          ));

    return <div>{content}</div>;
};
