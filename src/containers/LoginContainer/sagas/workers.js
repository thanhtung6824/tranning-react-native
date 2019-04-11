import {call, put} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import service from './services';
import toastr from '../../../components/Toastr';
import {actionTypes} from './actions';
import NavigationServices from '../../../navigations/NavigatorService';
import {actionTypes as actionCommon} from '../../../common/actions';

export function* loginWorker(action) {
    try {
        const response = yield call(service.login, action.payload);
        if (response.Success) {
            yield put({type: actionTypes.LOGIN_SUCCESS_ACTION, response});
        } else {
            yield put({type: actionTypes.LOGIN_FAILURE, response});
        }
        yield put({type: actionCommon.LOADING, isLoading: false});
    } catch (err) {
        yield put({type: actionTypes.LOGIN_FAILURE, err});
        yield put({type: actionCommon.LOADING, isLoading: false});
    }
}

export function* loginSuccessWorker(action) {
    const userInfo = {
        userID: action.response.Data.UserObjectId,
        token: action.response.Token,
    };
    const params = {
        userName: action.response.Data.Info.Name,
        logo: action.response.Data.Company.Logo,
    };
    AsyncStorage.setItem('user', JSON.stringify(userInfo));
    NavigationServices.navigate('Drawer', {params});
}

export function* loginFailedWorker(action) {
    toastr.showToast(action.response ? action.response.Message : action.err);
}
