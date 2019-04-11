import * as React from 'react';
import {connect} from 'react-redux';
import Orders from '../../screens/Orders';

export interface Props {
    navigation: any;
    data: Object;
}
export interface State {
}
class OrdersContainer extends React.Component<Props, State> {
    render() {
        return <Orders navigation={this.props.navigation} list={this.props.data}/>;
    }
}

function bindAction() {
    return {
    };
}

const mapStateToProps = () => ({
});
export default connect(mapStateToProps, bindAction)(OrdersContainer);
