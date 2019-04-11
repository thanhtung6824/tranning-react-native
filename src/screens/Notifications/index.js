import * as React from 'react';
import {Image} from 'react-native';
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    View,
} from 'native-base';
import {DrawerActions} from 'react-navigation';
import frameworkStyle from '../../styles/framework';
import style from '../../styles/style';

const Notification = ({...props}) => (
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
                Thông báo
                </Text>
            </Body>
            <Right style={{flex: 1}}/>
        </Header>
        <Content padder style={style.backgroundWhite}>
            <View style={frameworkStyle.content}>
                <View>
                    <View style={style.display}>
                        <View style={[style.borderBottom, {
                            minHeight: 60,
                            justifyContent: 'center',
                        }, frameworkStyle.slide]}
                        >
                            <View style={style.inline}>
                                <Image
                                    style={{width: 40, height: 40}}
                                    source={require('../../images/logo-kangaroo.png')} // eslint-disable-line
                                />
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>&nbsp;172</Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>
                                        &nbsp;172 Tân
                                        Chánh Hiệp 10, Quận 12, Hồ Chí Minh
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {
                            minHeight: 60,
                            justifyContent: 'center',
                        }, frameworkStyle.slide]}
                        >
                            <View style={style.inline}>
                                <Image
                                    style={{width: 40, height: 40}}
                                    source={require('../../images/logo.png')} // eslint-disable-line
                                />
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;Gin shop
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>
                                        &nbsp;159/4/1 Đường Bạch
                                        Đằng Tân Bình
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {
                            minHeight: 60,
                            justifyContent: 'center',
                        }, frameworkStyle.slide]}
                        >
                            <View style={style.inline}>
                                <Image
                                    style={{width: 40, height: 40}}
                                    source={require('../../images/logo-kangaroo.png')} // eslint-disable-line
                                />
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;Phước Vĩnh
                                        Đông
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>
                                        &nbsp;Phước Vĩnh Đông, Cần Giuộc,
                                        Long An
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {
                            minHeight: 60,
                            justifyContent: 'center',
                        }, frameworkStyle.slide]}
                        >
                            <View style={style.inline}>
                                <Image
                                    style={{width: 40, height: 40}}
                                    source={require('../../images/logo.png')} // eslint-disable-line
                                />
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;Trạm cây xăng Sài Gòn
                                        Petro
                                        Đông
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>
                                        &nbsp;Trạm cây xăng Sài Gòn Petro,
                                        Sơn Kỳ, Tân Phú
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {
                            minHeight: 60,
                            justifyContent: 'center',
                        }, frameworkStyle.slide]}
                        >
                            <View style={style.inline}>
                                <Image
                                    style={{width: 40, height: 40}}
                                    source={require('../../images/shop.png')} // eslint-disable-line
                                />
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;ParkSon
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>
                                        &nbsp;2 Hồng Hà, Tân Bình
                                    </Text>
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </Content>
    </Container>
);

export default Notification;
