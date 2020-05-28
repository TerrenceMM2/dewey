export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return { loggedIn: false, registered: true, message: action.payload.message };

        case 'REGISTER_FAILURE':
            return { loggedIn: false, message: action.payload.message };

        case 'LOGIN_SUCCESS':
            const token = action.payload.user.token.split(' ')[1];
            const { firstName, lastName, email } = action.payload.user;
            localStorage.setItem('token', token);
            return {
                loggedIn: true,
                firstName,
                lastName,
                email
            };

        case 'LOGIN_FAILURE':
            return { loggedIn: false, message: action.payload.message };

        case 'LOGOUT':
            localStorage.removeItem('token');
            return { loggedIn: false };

        case 'VALIDATION_SUCCESS':
            return { loggedIn: true };

        case 'VALIDATION_FAILURE':
            localStorage.removeItem('token');
            return { loggedIn: false, message: action.payload.message };

        case 'UPDATE_PASSWORD_SUCCESS':
            console.log(action.payload);
            return { ...state, updatedPwd: true, message: action.payload.message };

        case 'UPDATE_PASSWORD_FAILURE':
            return { ...state, updatedPwd: false, message: action.payload.message };

        case 'RESET_EMAIL_SUCCESS':
            return { ...state, message: action.payload.message };

        case 'RESET_EMAIL_FAILURE':
            return { ...state, message: action.payload.message };

        default:
            return state;
    }
};
