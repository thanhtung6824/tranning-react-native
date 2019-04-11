import {actionTypes} from './actions';

export function loadingReducer(state = false, action) {
    if (action.type === actionTypes.LOADING) {
        return action.isLoading;
    }
    return state;
}
