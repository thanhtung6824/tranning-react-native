import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationActions, StackActions} from 'react-navigation';
import {AsyncStorage} from 'react-native';
import Sidebar from '../../screens/Sidebar';
import * as sidebarActions from '../../common/actions';

export interface Props {
    navigation: any;
}

export interface State {
}

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Logout'})],
});

class SidebarContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.changeScreen = this.changeScreen.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.reRenderSidebar !== this.props.reRenderSidebar;
    }

    componentDidUpdate() {
        this.setState({reRenderSidebar: false}); //eslint-disable-line
        this.props.actions.changeScreen(this.props.screen, false);
    }

    async logOut() {
        this.props.actions.changeScreen('', true);
        this.props.navigation.dispatch(resetAction);
        await AsyncStorage.removeItem('user');
        this.props.actions.changeScreen('', false);
    }

    changeScreen(screen) {
        this.props.actions.changeScreen(screen, true);
        this.props.navigation.navigate(screen);
    }


    render() {
        return (
            <Sidebar
                navigation={this.props.navigation}
                screen={this.props.screen}
                logOut={this.logOut}
                changeScreen={this.changeScreen}
                reRenderSidebar={this.props.reRenderSidebar}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        screen: state.sidebarReducer.screen,
        reRenderSidebar: state.sidebarReducer.reRenderSidebar,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sidebarActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
