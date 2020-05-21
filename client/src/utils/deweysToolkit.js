import validator from 'validator';
import axios from 'axios';

// this function is used to truncate long string values
export const truncate = (value, length) => {
    if (!value) {
        return;
    }

    if (value.length <= length) {
        return value;
    }

    return value.slice(0, length) + '...';
};

// this function checks whether data types are empty
export const isEmpty = value => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};

// this function uses `validator` against inputs for registration step 1
export const validateRegistrationStepOne = async (firstName, lastName, email) => {
    let errors = {};

    if (validator.isEmpty(firstName)) {
        errors.firstName = 'Dewey wants to know your first name.';
    }

    if (validator.isEmpty(lastName)) {
        errors.lastName = 'Dewey wants to know your last name.';
    }

    if (!validator.isEmail(email)) {
        errors.email = "Dewey doesn't think this is a real email.";
    }

    if (validator.isEmpty(email)) {
        errors.email = 'Dewey wants to know your email!.';
    }

    if (!validator.isEmpty(email)) {
        const response = await axios({
            method: 'GET',
            url: `/api/auth/email/${email}`
        });

        if (response.data.isUsed) {
            errors.email = 'This email is already in use.';
        }
    }

    return {
        isValid: isEmpty(errors),
        errors
    };
};

// this function uses `validator` against inputs for registration step 2
export const validateRegistrationStepTwo = (password, match) => {
    let errors = {};

    if (validator.isEmpty(password)) {
        errors.password = 'Dewey needs a password!.';
    }

    if (validator.isEmpty(match)) {
        errors.match = 'Dewey needs a confirmed password!.';
    }

    if (!validator.equals(password, match)) {
        errors.password = "Dewey noticed these don't match!.";
        errors.match = "Dewey noticed these don't match!.";
    }

    if (!validator.isLength(password, { min: 7 })) {
        errors.password = 'Dewey says 7 characters or more please.';
    }
    return {
        isValid: isEmpty(errors),
        errors
    };
};

// this function uses `validator` against inputs for registration step 3
export const validateRegistrationStepThree = (
    securityAnswer1,
    securityAnswer2,
    securityAnswer3
) => {
    let errors = {};

    if (validator.isEmpty(securityAnswer1)) {
        errors.securityAnswer1 = 'Dewey needs an answer!.';
    }

    if (validator.isEmpty(securityAnswer2)) {
        errors.securityAnswer2 = 'Dewey needs an answer!.';
    }

    if (validator.isEmpty(securityAnswer3)) {
        errors.securityAnswer3 = 'Dewey needs an answer!.';
    }

    return {
        isValid: isEmpty(errors),
        errors
    };
};
