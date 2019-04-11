import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FOOTER from '../../screens/Footer';
import * as sidebarActions from '../../common/actions';

export interface Props {
    navigation: any;
}

export interface State {
}

class FooterContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(screen) {
        this.props.actions.changeScreen(screen, true);
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <FOOTER
                navigation={this.props.navigation}
                handleNavigation={this.handleNavigation}
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
