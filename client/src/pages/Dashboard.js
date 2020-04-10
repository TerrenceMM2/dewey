import React, { useContext } from 'react';
import { UserContext } from '../context/contexts/UserContext';
import { Redirect } from 'react-router-dom';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const auth = user.loggedIn;
  let content;

  auth ? (content = <h3>Dashboard</h3>) : (content = <Redirect to="/" />);
  return <div>{content}</div>;
};
