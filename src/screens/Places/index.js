import * as React from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {DrawerActions} from 'react-navigation';
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
    Item,
    Input,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import frameworkStyle from '../../styles/framework';
import style from '../../styles/style';

const Places = ({...props}) => (
    <Container style={style.backgroundWhite}>
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
                <MaterialCommunityIcons
                    style={[style.fontBlue, {alignSelf: 'center'}]}
                    name="vector-circle"
                    size={25}
                />
            </Body>
            <Right style={{flex: 1}}>
                <MaterialCommunityIcons
                    style={style.fontBlue}
                    name="map-outline"
                    size={25}
                />
            </Right>
        </Header>
        <Content padder>
            <View style={frameworkStyle.content}>
                <View>
                    <Item style={frameworkStyle.searchInput}>
                        <Feather
                            style={{fontSize: 14, color: '#555'}}
                            name="search"
                            size={14}
                        />
                        <Input
                            placeholder="Tìm địa điểm..."
                            placeholderTextColor="#646464"
                            style={{fontSize: 14, color: '#555'}}
                        />
                    </Item>
                </View>
                <View>
                    <View style={style.display}>
                        <TouchableHighlight onPress={props.goToPlaceDetail}>
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
                                            &nbsp;172
                                        </Text>
                                        {' '}
                                        {'\n'}
                                        <Text style={frameworkStyle.slideSubText}>
                                            &nbsp;172 Tân
                                            Chánh Hiệp 10, Quận 12, Hồ Chí Minh
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
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
                                    source={require('../../images/shop.png')} // eslint-disable-line
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
                                    source={require('../../images/shop.png')} // eslint-disable-line
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

export default Places;
