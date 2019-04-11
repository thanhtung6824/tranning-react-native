import {all} from 'redux-saga/effects';
import * as loginWatcherSaga from '../containers/LoginContainer/sagas/watchers';

export default function* IndexSagas() {
    yield all([
        loginWatcherSaga.watcherLogin(),
        loginWatcherSaga.watcherLoginSuccess(),
        loginWatcherSaga.watcherLoginFailed(),
    ]);
}
