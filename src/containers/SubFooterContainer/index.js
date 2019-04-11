import * as React from 'react';
import SubFooter from '../../screens/SubFooter';

export interface Props {
    navigation: any;
}
export interface State {
}
export default class SubFooterContainer extends React.Component<Props, State> {
    render() {
        return <SubFooter navigation={this.props.navigation}/>;
    }
}
