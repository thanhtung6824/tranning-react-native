import {call, put} from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import service from '../sagas/services';
import {actionTypes} from '../sagas/actions';
import {loginWorker} from '../sagas/workers';
import reducer from '../sagas/reducers';
import {actionTypes as actionCommon} from '../../../common/actions';

service.login = jest.fn();

const user = {
    LoginID: 'sale0001',
    Password: 'sale0001',
};


describe('login success', () => {
    const response = {
        Data: {
            UserObjectId: 'test user',
        },
        Token: 'test token',
        Success: true,
    };

    const action = {
        type: actionTypes.LOGIN_ACTION,
        payload: user,
    };

    const it = sagaHelper(loginWorker(action));

    it('should login', (result) => {
        expect(result).toEqual(call(service.login, action.payload));
        expect(service.login).not.toHaveBeenCalled();

        return response;
    });

    it('and then trigger an login success', (result) => {
        expect(result).toEqual(put({type: actionTypes.LOGIN_SUCCESS_ACTION, response}));
    });

    it('and then trigger hide loading', (result) => {
        expect(result).toEqual(put({type: actionCommon.LOADING, isLoading: false}));
    });

    it('and then nothing', (result) => {
        expect(result).toBeUndefined();
    });
});

describe('login failed', () => {
    const response = {
        Success: false,
        Message: 'Login failed'
    };

    const action = {
        type: actionTypes.LOGIN_ACTION,
        payload: user,
    };

    const it = sagaHelper(loginWorker(action));

    it('should login', (result) => {
        expect(result).toEqual(call(service.login, action.payload));
        expect(service.login).not.toHaveBeenCalled();

        return response;
    });

    it('and then trigger an login failed', (result) => {
        expect(result).toEqual(put({type: actionTypes.LOGIN_FAILURE, response}));
    });

    it('and then trigger hide loading', (result) => {
        expect(result).toEqual(put({type: actionCommon.LOADING, isLoading: false}));
    });

    it('and then nothing', (result) => {
        expect(result).toBeUndefined();
    });
});

describe('test reducer login', () => {
    const response = {
        Data: {
            UserObjectId: 'test user',
        },
        Token: 'test token',
        Success: true,
    };

    it('should return the initial state', () => {
        expect(reducer({}, {})).toEqual({});
    });

    it('should handle LOGIN_ACTION', () => {
        expect(
            reducer({}, {
                type: actionTypes.LOGIN_ACTION,
                payload: user
            })
        ).toEqual(user);
    });


    it('should handle LOGIN_SUCCESS_ACTION', () => {
        expect(
            reducer(user, {
                type: actionTypes.LOGIN_SUCCESS_ACTION,
                response
            })
        ).toEqual({Token: response.Token});
    });
});
