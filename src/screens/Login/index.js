import * as React from 'react';
import {Image} from 'react-native';
import {
    Container, Content, Button, Text, View
} from 'native-base';
import style from '../../styles/login';
import Loading from '../../components/Loading';

export interface Props {
    loginForm: any;
    onLogin: Function;
}

export interface State {
}

const Login = ({...props}) => (
    <Container style={[{backgroundColor: '#ffffff'}, style.logo]}>
        <Loading/>
        <Image
            style={style.image}
            source={require('../../images/logo.png')} // eslint-disable-line
        />
        <Content style={style.loginForm}>
            {props.loginForm}
            <View style={style.formAction}>
                <Button
                    block
                    info
                    style={style.button}
                    onPress={() => props.onLogin()}
                >
                    <Text
                        allowFontScaling={false}
                        style={style.text}
                    >
                        Login
                    </Text>
                </Button>
            </View>
        </Content>
    </Container>
);

export default Login;
