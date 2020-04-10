import axios from 'axios';
import { titleCase } from 'title-case';

export const SendRegister = (firstName, lastName, email, password) => {
  const response = axios({
    method: 'POST',
    url: '/api/user/register',
    data: {
      firstName: titleCase(firstName.toLocaleLowerCase()),
      lastName: titleCase(lastName.toLocaleLowerCase()),
      email: email.toLowerCase(),
      password,
    },
  });
  return response;
};
