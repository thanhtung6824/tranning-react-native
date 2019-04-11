import * as React from 'react';
import {Button, Footer, FooterTab} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../styles/style';

const FOOTER = ({...props}) => (
    <Footer>
        <FooterTab style={style.backgroundWhite}>
            <Button
                vertical
                onPress={() => {
                    props.handleNavigation('Dashboard');
                }}
            >
                <FontAwesome
                    style={props.navigation.state.index === 0 && props.navigation.state.routeName === 'Tab' ? style.activeColor : {}}
                    name="home"
                    size={30}
                />
            </Button>
            <Button
                onPress={() => {
                    props.handleNavigation('Schedule');
                }}
                vertical
            >
                <FontAwesome
                    style={props.navigation.state.index === 1 && props.navigation.state.routeName === 'Tab' ? style.activeColor : {}}
                    name="calendar"
                    size={30}
                />
            </Button>
            <Button
                onPress={() => {
                    props.handleNavigation('Photo');
                }}
                vertical
            >
                <Feather
                    style={props.navigation.state.index === 2 && props.navigation.state.routeName === 'Tab' ? style.activeColor : {}}
                    name="camera"
                    size={30}
                />
            </Button>
            <Button
                onPress={() => {
                    props.handleNavigation('Orders');
                }}
                vertical
            >
                <FontAwesome
                    style={props.navigation.state.index === 3 && props.navigation.state.routeName === 'Tab' ? style.activeColor : {}}
                    name="wpforms"
                    size={30}
                />
            </Button>
            <Button
                onPress={() => {
                    props.handleNavigation('Notifications');
                }}
                vertical
            >
                <Feather
                    style={props.navigation.state.index === 4 && props.navigation.state.routeName === 'Tab' ? style.activeColor : {}}
                    name="bell"
                    size={30}
                />
            </Button>
        </FooterTab>
    </Footer>

);

export default FOOTER;
