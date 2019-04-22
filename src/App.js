import * as React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Login from './containers/LoginContainer';
import Music from './containers/MusicContainer';

const App = createStackNavigator(
    {
        Login: {screen: Login},
        Music: {screen: Music},
        Logout: {screen: Login},
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        },
    },
);

export default createAppContainer(App);
