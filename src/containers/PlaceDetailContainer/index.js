import * as React from 'react';
import {connect} from 'react-redux';
import PlaceDetail from '../../screens/PlaceDetail';

export interface Props {
    navigation: any;
    data: Object;
}
export interface State {
}
class PlaceDetailContainer extends React.Component<Props, State> {
    render() {
        return <PlaceDetail navigation={this.props.navigation} list={this.props.data}/>;
    }
}

function bindAction() {
    return {
    };
}

const mapStateToProps = () => ({
});
export default connect(mapStateToProps, bindAction)(PlaceDetailContainer);
