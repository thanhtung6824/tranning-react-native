import * as React from 'react';
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body,
    View,
    Footer,
    FooterTab,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DrawerActions} from 'react-navigation';
import style from '../../styles/style';
import frameworkStyle from '../../styles/framework';

const Music = ({...props}) => (
    <Container>
        <Header style={style.backgroundWhite}>
            <Left style={{flex: 1}}>
                <Button transparent>
                    <Icon
                        active
                        style={style.fontBlue}
                        name="menu"
                        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </Button>
            </Left>
            <Body style={{flex: 1}}>
            <Text
                style={[style.fontBlue, {alignSelf: 'center', fontWeight: '500'}]}
            >
            </Text>
            </Body>
            <Right style={{flex: 1}}>
                <MaterialCommunityIcons
                    style={style.fontBlue}
                    name="filter"
                    size={25}
                />
            </Right>
        </Header>
        <Content style={style.backgroundWhite}>
        </Content>
    </Container>
);

export default Music;
