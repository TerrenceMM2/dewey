import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/contexts/UserContext';
import { SendRegister } from './Action';

export const RegisterForm = () => {
  const { user, dispatch } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [match, setMatch] = useState('');
  const auth = user.loggedIn;
  const registered = user.registered;
  let message = user.message;
  let content;

  const handleForm = async (e) => {
    e.preventDefault();

    if (password === match) {
      try {
        const response = await SendRegister(firstName, lastName, email, password);
        dispatch({ type: 'REGISTER_SUCCESS', payload: { message: response.data } });
      } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', payload: { message: error.response.data } });
        setPassword('');
        setMatch('');
      }
    } else {
      dispatch({ type: 'REGISTER_FAILURE', payload: { message: "Passwords don't match." } });
      setPassword('');
      setMatch('');
    }
  };

  if (auth) {
    content = <Redirect to="/" />;
  } else if (registered) {
    content = <Redirect to="/" />;
  } else {
    content = (
      <form onSubmit={handleForm}>
        <p>{message}</p>
        <fieldset>
          <input
            required
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            required
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            required
            type="password"
            placeholder="Password"
            value={match}
            onChange={(e) => setMatch(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }

  return <div>{content}</div>;
};
