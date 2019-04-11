import {actionTypes} from './actions';

const initialState = {};

export default function (state = initialState, action) {
    if (action.type === actionTypes.LOGIN_ACTION) {
        return action.payload;
    }
    if (action.type === actionTypes.LOGIN_SUCCESS_ACTION) {
        return {Token: action.response.Token};
    }

    return state;
}
