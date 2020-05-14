import { useState } from 'react';

const useUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return {
        firstName: {
            value: firstName,
            onChange: e => setFirstName(e.target.value)
        },
        lastName: {
            value: lastName,
            onChange: e => setLastName(e.target.value)
        },
        email: {
            value: email,
            onChange: e => setEmail(e.target.value)
        },
        password: {
            value: password,
            onChange: e => setPassword(e.target.value)
        }
    };
};

export default useUser;
