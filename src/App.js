import * as React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';
import Login from './containers/LoginContainer';
import Places from './containers/PlacesContainer';
import PlaceDetail from './containers/PlaceDetailContainer';
import Dashboard from './containers/DashboardContainer';
import Sidebar from './containers/SidebarContainer';
import Footer from './containers/FooterContainer';
import Schedule from './containers/ScheduleContainer';
import Photo from './containers/PhotoContainer';
import Notifications from './containers/NotificationsContainer';
import Orders from './containers/OrderContainer';
import SubFooter from './containers/SubFooterContainer';

const Tab = createBottomTabNavigator(
    {
        Dashboard: {screen: Dashboard},
        Schedule: {screen: Schedule},
        Photo: {screen: Photo},
        Orders: {screen: Orders},
        Notifications: {screen: Notifications},
    },
    {
        initialRouteName: 'Dashboard',
        tabBarComponent: (props: any) => <Footer {...props} />,
    },
);

const PlacesScreen = createBottomTabNavigator(
    {
        Places: {screen: Places},
    },
    {
        tabBarComponent: (props: any) => <Footer {...props} />,
    },
);

const PlaceDetailScreen = createBottomTabNavigator(
    {
        PlaceDetail: {screen: PlaceDetail},
    },
    {
        tabBarComponent: (props: any) => <SubFooter {...props} />,
    },
);

const Drawer = createDrawerNavigator(
    {
        Tab: {screen: Tab},
        Places: {screen: PlacesScreen},
        PlaceDetail: {screen: PlaceDetailScreen},
    },
    {
        drawerWidth: 250,
        drawerPosition: 'left',
        initialRouteName: 'Tab',
        order: ['Tab', 'Places', 'PlaceDetail'],
        contentComponent: (props: any) => <Sidebar {...props} />,
    },
);

const App = createStackNavigator(
    {
        Login: {screen: Login},
        Drawer: {screen: Drawer},
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
