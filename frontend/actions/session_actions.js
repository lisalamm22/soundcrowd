import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT-USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const clearErrors = () => {
    return ({
        type: CLEAR_SESSION_ERRORS,
    })
}

export const signup = (formUser) => (dispatch) => {
    return (
        APIUtil.signup(formUser)
            .then(user => dispatch(receiveCurrentUser(user)))
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
    );
};

export const logout = () => (dispatch) => {
    return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = (formUser) => (dispatch) => {
    // debugger
    return (
        APIUtil.login(formUser)
            .then(user => {
                // debugger
                return (dispatch(receiveCurrentUser(user)))
            })
            .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
    );
};