import * as React from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
import styles from '../../styles/component-rounded';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default MyStatusBar;
