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

const Orders = ({...props}) => (
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
                Danh sách đơn hàng
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
            <View style={style.content}>
                <View style={[style.inline, style.alignCenter]}>
                    <Text>
                        &nbsp;
                    </Text>
                    <FontAwesome5
                        style={style.fontBlue}
                        FontIcon={FontAwesome5}
                        name="file-invoice-dollar"
                        size={14}
                    />
                    <Text style={style.fontBlue}>&nbsp;Đơn hàng :</Text>
                </View>
                <View style={style.tableTitleInfo}>
                    <View style={frameworkStyle.table}>
                        <View style={[style.inline, style.alignCenter]}>
                            <Text>
                                &nbsp;
                            </Text>
                            <FontAwesome
                                style={[style.fontBlue, style.fontBold]}
                                name="map-marker"
                                size={14}
                            />
                            <Text>
                                &nbsp;
                            </Text>
                            <FontAwesome
                                style={[style.fontBlue, style.fontBold]}
                                name="calendar"
                                size={14}
                            />
                        </View>
                        <View style={[style.alignCenter]}>
                            <FontAwesome
                                style={[style.fontBlue, style.fontBold]}
                                name="cube"
                                size={14}
                            />
                        </View>
                        <View style={[style.inline, style.alignCenter]}>
                            <MaterialCommunityIcons
                                style={[style.fontBlue, style.fontBold]}
                                name="cash-usd"
                                size={14}
                            />
                            <Text>
                                &nbsp;
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={style.display}>
                        <View style={[style.borderBottom, {
                            minHeight: 60,
                            justifyContent: 'center',
                        }, frameworkStyle.slide, frameworkStyle.table]}
                        >
                            <View style={style.inline}>
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;Vinmart
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>
                                        &nbsp;2019-01-02 10:00:31
                                    </Text>
                                </Text>
                            </View>
                            <View>
                                <Text style={[style.fontBlue, {fontSize: 16}]}>4087441</Text>
                            </View>
                            <View style={style.inline}>
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;12.222
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>&nbsp;12.222</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {
                            minHeight: 60,
                            justifyContent: 'center',
                        }, frameworkStyle.slide, frameworkStyle.table]}
                        >
                            <View style={style.inline}>
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;Trường
                                        Thạnh
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>
                                        &nbsp;2019-01-02 15:59:00
                                    </Text>
                                </Text>
                            </View>
                            <View>
                                <Text style={[style.fontBlue, {fontSize: 16}]}>53202944</Text>
                            </View>
                            <View style={style.inline}>
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;456.789
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>&nbsp;456.789</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {
                            minHeight: 60,
                            justifyContent: 'center',
                        }, frameworkStyle.slide, frameworkStyle.table]}
                        >
                            <View style={style.inline}>
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;Đống Đa
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>
                                        &nbsp;2019-01-09 20:00:31
                                    </Text>
                                </Text>
                            </View>
                            <View>
                                <Text style={[style.fontBlue, {fontSize: 16}]}>32764245</Text>
                            </View>
                            <View style={style.inline}>
                                <Text>
                                    <Text style={[style.fontBlue, {fontSize: 16}]}>
                                        &nbsp;2.312.412
                                    </Text>
                                    {' '}
                                    {'\n'}
                                    <Text style={frameworkStyle.slideSubText}>&nbsp;2.322.432</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Content>
        <Footer>
            <FooterTab style={style.tableTitleInfo}>
                <Right>
                    <View style={[style.inline, style.alignCenter]}>
                        <MaterialCommunityIcons
                            style={[style.fontBlue, style.fontBold]}
                            name="sigma"
                            size={18}
                        />
                        <Text>
                            <Text style={style.fontGreen}>0</Text>
                            /0 sp&nbsp;
                        </Text>
                    </View>
                </Right>
            </FooterTab>
        </Footer>
    </Container>
);

export default Orders;
