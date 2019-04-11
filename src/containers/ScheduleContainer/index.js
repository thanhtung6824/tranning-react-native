import * as React from 'react';
import {connect} from 'react-redux';
import Schedule from '../../screens/Schedule';

export interface Props {
    navigation: any;
    data: Object;
}
export interface State {
}
class ScheduleContainer extends React.Component<Props, State> {
    render() {
        return <Schedule navigation={this.props.navigation}/>;
    }
}

function bindAction() {
    return {
    };
}

const mapStateToProps = () => ({
});
export default connect(mapStateToProps, bindAction)(ScheduleContainer);
