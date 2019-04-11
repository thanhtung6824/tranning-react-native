import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import reducer from '../reducers';
import indexSaga from '../sagas';

const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};
export default function configureStore(onCompletion) {
    const middlewares = [sagaMiddleware, middleware];
    const enhancer = compose(applyMiddleware(...middlewares));
    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = createStore(persistedReducer, enhancer);
    const persistor = persistStore(store, onCompletion);
    sagaMiddleware.run(indexSaga);
    return {store, persistor};
}
// # sourceMappingURL=configureStore.js.map
