export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return { loggedIn: false, registered: true, message: action.payload.message };

        case 'REGISTER_FAILURE':
            return { loggedIn: false, message: action.payload.message };

        case 'LOGIN_SUCCESS':
            const token = action.payload.token.split(' ')[1];
            localStorage.setItem('token', token);
            return { loggedIn: true };

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
            return { loggedIn: true, updatedPwd: true, message: action.payload.message };

        case 'UPDATE_PASSWORD_FAILURE':
            return { loggedIn: true, updatedPwd: false, message: action.payload.message };

        default:
            return state;
    }
};
