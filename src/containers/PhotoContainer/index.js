import * as React from 'react';
import {connect} from 'react-redux';
import Photo from '../../screens/Photo';

export interface Props {
    navigation: any;
    data: Object;
}
export interface State {
}
class PhotoContainer extends React.Component<Props, State> {
    render() {
        return <Photo navigation={this.props.navigation} list={this.props.data}/>;
    }
}

function bindAction() {
    return {
    };
}

const mapStateToProps = () => ({
});
export default connect(mapStateToProps, bindAction)(PhotoContainer);
