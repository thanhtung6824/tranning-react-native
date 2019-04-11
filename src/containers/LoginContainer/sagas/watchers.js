import {takeLatest} from 'redux-saga/effects';
import * as workers from './workers';
import {actionTypes} from './actions';

export function* watcherLogin() {
    yield takeLatest(actionTypes.LOGIN_ACTION, workers.loginWorker);
}

export function* watcherLoginSuccess() {
    yield takeLatest(actionTypes.LOGIN_SUCCESS_ACTION, workers.loginSuccessWorker);
}

export function* watcherLoginFailed() {
    yield takeLatest(actionTypes.LOGIN_FAILURE, workers.loginFailedWorker);
}
