import * as React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loadingAction from '../../common/actions';

class Loading extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={this.props.isLoading} size="large"/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.loadingReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loadingAction, dispatch),
    };
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
