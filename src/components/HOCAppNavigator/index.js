import * as React from 'react';
import NavigationService from '../../navigations/NavigatorService';

const withNavigator = WrappedComponent => class extends React.Component {
    render() {
        return (
            <WrappedComponent
                ref={(navigatorRef) => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
};

export default withNavigator;
