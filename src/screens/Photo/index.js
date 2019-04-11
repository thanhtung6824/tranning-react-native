import * as React from 'react';
import {
    Container, Header, Content, Text, Button, Icon, Left, Right, Body
} from 'native-base';
import {DrawerActions} from 'react-navigation';
import style from '../../styles/style';

const Photo = ({...props}) => (
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
                Hình ảnh
                </Text>
            </Body>
            <Right style={{flex: 1}}/>
        </Header>

        <Content padder style={style.backgroundWhite}/>
    </Container>
);

export default Photo;
