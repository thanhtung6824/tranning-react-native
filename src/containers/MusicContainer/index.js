import * as React from 'react';
import {connect} from 'react-redux';
import Music from '../../screens/Music';

export interface Props {
    navigation: any;
    data: Object;
}
export interface State {
}
class MusicContainer extends React.Component<Props, State> {
    render() {
        return <Music navigation={this.props.navigation} list={this.props.data}/>;
    }
}

function bindAction() {
    return {
    };
}

const mapStateToProps = () => ({
});
export default connect(mapStateToProps, bindAction)(MusicContainer);
