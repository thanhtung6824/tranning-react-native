import * as React from 'react';
import {StyleProvider, Root} from 'native-base';
import {Provider, connect} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import configureStore from './configureStore';
import AppNavigator from '../App';
import getTheme from '../theme/components';
import variables from '../theme/variables/platform';
import withNavigator from '../components/HOCAppNavigator';

export interface Props {
}

export interface State {
    store: Object;
    isLoading: boolean;
}

const mapStateToProps = state => ({
    state: state.nav,
});

const AppWithHoc = withNavigator(AppNavigator);

const AppWithNavigationState = connect(mapStateToProps)(AppWithHoc);

const storeConfig = configureStore({isLoading: false});


export default class Setup extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            store: storeConfig.store,
            persistor: storeConfig.persistor,
        };
    }

    render() {
        const {store, persistor} = this.state;
        return (
            <StyleProvider style={getTheme(variables)}>
                <Provider store={store}>
                    <PersistGate loading={undefined} persistor={persistor}>
                        <Root>
                            <AppWithNavigationState/>
                        </Root>
                    </PersistGate>
                </Provider>
            </StyleProvider>
        );
    }
}
