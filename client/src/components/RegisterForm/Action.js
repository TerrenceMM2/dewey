import axios from 'axios';

export const SendRegister = (firstName, lastName, email, password) => {
  const response = axios({
    method: 'POST',
    url: '/api/user/register',
    data: { firstName, lastName, email, password },
  });
  return response;
};
