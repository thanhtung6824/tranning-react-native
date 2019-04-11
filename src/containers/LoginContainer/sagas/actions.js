export const actionTypes = {
    LOGIN_ACTION: 'LOGIN',
    LOGIN_SUCCESS_ACTION: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
};

export function login(user) {
    return {
        type: actionTypes.LOGIN_ACTION,
        payload: user,
    };
}
