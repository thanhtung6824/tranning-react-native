import * as React from 'react';
import Dashboard from '../../screens/Dashboard';

export interface Props {
    navigation: any,
}
export interface State {
}
export default class DashboardContainer extends React.Component<Props, State> {
    render() {
        return <Dashboard navigation={this.props.navigation}/>;
    }
}
