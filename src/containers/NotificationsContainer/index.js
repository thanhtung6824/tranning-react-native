import * as React from 'react';
import {connect} from 'react-redux';
import Notifications from '../../screens/Notifications';

export interface Props {
    navigation: any;
    data: Object;
}
export interface State {
}
class NotificationsContainer extends React.Component<Props, State> {
    render() {
        return <Notifications navigation={this.props.navigation} list={this.props.data}/>;
    }
}

function bindAction() {
    return {
    };
}

const mapStateToProps = () => ({
});
export default connect(mapStateToProps, bindAction)(NotificationsContainer);
