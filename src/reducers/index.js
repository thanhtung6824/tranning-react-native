import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import loginReducer from '../containers/LoginContainer/sagas/reducers';
import sidebarReducer from '../containers/SidebarContainer/sagas/reducers';
import {loadingReducer} from '../common/reducers';

import AppNavigator from '../App';

const navReducer = createNavigationReducer(AppNavigator);


export default combineReducers({
    nav: navReducer,
    form: formReducer,
    loginReducer,
    sidebarReducer,
    loadingReducer,
});
