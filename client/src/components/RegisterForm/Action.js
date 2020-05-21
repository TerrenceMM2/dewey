import axios from 'axios';
import { titleCase } from 'title-case';

export const SendRegister = (
    firstName,
    lastName,
    email,
    password,
    securityAnswer1,
    securityAnswer2,
    securityAnswer3,
    securityQuestion1,
    securityQuestion2,
    securityQuestion3
) => {
    console.log(password);

    const response = axios({
        method: 'POST',
        url: '/api/auth/register',
        data: {
            firstName: titleCase(firstName.toLocaleLowerCase()),
            lastName: titleCase(lastName.toLocaleLowerCase()),
            email: email.toLowerCase(),
            password,
            securityAnswer1: securityAnswer1.toLowerCase(),
            securityAnswer2: securityAnswer2.toLowerCase(),
            securityAnswer3: securityAnswer3.toLowerCase(),
            securityQuestion1: securityQuestion1.toLowerCase(),
            securityQuestion2: securityQuestion2.toLowerCase(),
            securityQuestion3: securityQuestion3.toLowerCase()
        }
    });
    return response;
};
