import * as React from 'react';
import {DrawerActions} from 'react-navigation';
import {
    Container, Header, Content, Text, Button, Icon, Left, Right, Body, View
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../../styles/style';
import frameworkStyle from '../../styles/framework';

const Dashboard = ({...props}) => (
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
                <MaterialCommunityIcons
                    style={[style.fontBlue, {alignSelf: 'center'}]}
                    name="vector-circle"
                    size={25}
                />
            </Body>
            <Right style={{flex: 1}}>
                <MaterialCommunityIcons
                    style={style.fontBlue}
                    name="filter"
                    size={25}
                />
            </Right>
        </Header>

        <Content style={[frameworkStyle.headerClearLarger, style.backgroundWhite]}>
            <View style={frameworkStyle.content}>
                <View style={frameworkStyle.panelInfo}>
                    <View style={[frameworkStyle.panelContent, style.center]}>
                        <Feather
                            style={[style.fontBlue, style.fontBold]}
                            name="bar-chart"
                            size={19}
                        />
                        <Text style={[style.fontBlue, {fontWeight: '500', fontSize: 17}]}>
                            Thành tích
                        </Text>
                    </View>
                </View>
                <View style={[style.dashboardStat, style.yellowLemon]}>
                    <View style={style.display}>
                        <View>
                            <View style={[style.numberRevenue, style.inline]}>
                                <FontAwesome
                                    style={[style.fontBlue, {width: 16, lineHeight: 20}]}
                                    name="dollar"
                                    size={16}
                                />
                                <Text style={[style.fontRed, style.fontBold, {
                                    fontSize: 19,
                                    lineHeight: 25
                                }]}
                                >
                                    20,000,000
                                </Text>
                                <Text style={[style.fontRed, style.fontBold]}> đ</Text>
                            </View>
                        </View>
                        <View>
                            <View style={[style.numberRevenue, style.inline]}>
                                <FontAwesome
                                    style={[style.fontBlue, {width: 16, lineHeight: 20}]}
                                    name="bookmark-o"
                                    size={16}
                                />
                                <Text style={[style.fontRed, style.fontBold, {
                                    fontSize: 19,
                                    lineHeight: 25
                                }]}
                                >
                                    300
                                </Text>
                                <Text style={[style.fontRed, style.fontBold]}> sp</Text>
                            </View>
                        </View>
                        <View>
                            <View style={[style.numberRevenue, style.inline]}>
                                <Text style={[style.fontBlue, {fontSize: 17}]}>
                                    Hôm nay: 500,000 đ / 30 sp
                                    {' '}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={[style.progress, {height: 4, borderRadius: 4}]}>
                                <View style={[style.progressBar, {width: '85%', height: 4, borderRadius: 4}]}/>
                            </View>
                            <View style={style.status}>
                                <Text style={[{fontSize: 11, color: '#666'}]}>
                                    TIẾN ĐỘ
                                </Text>
                                <Right>
                                    <Text style={[{fontSize: 11, color: '#666'}]}>
                                        85%
                                    </Text>
                                </Right>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={frameworkStyle.content}>
                <View style={frameworkStyle.panelInfo}>
                    <View style={[frameworkStyle.panelContent, style.center]}>
                        <FontAwesome5
                            style={[style.fontRed, style.fontBold]}
                            name="running"
                            size={19}
                        />
                        <Text style={[style.fontRed, {fontWeight: '500', fontSize: 17}]}>
                            &nbsp;Hiệu suất làm việc
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={style.display}>
                        <View style={[style.borderBottom, {height: 35, justifyContent: 'center'}]}>
                            <View style={style.inline}>
                                <Feather
                                    style={[style.fontYellow, {width: 16, lineHeight: 20}]}
                                    name="clock"
                                    size={14}
                                />
                                <Text
                                    style={{fontSize: 15}}
                                >
                                    &nbsp;Thời gian trung bình tại điểm bán
                                </Text>
                                <Right>
                                    <Text>00:00:00</Text>
                                </Right>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {height: 35, justifyContent: 'center'}]}>
                            <View style={style.inline}>
                                <FontAwesome5
                                    style={[style.fontRed, {width: 16, lineHeight: 20}]}
                                    name="store"
                                    size={14}
                                />
                                <Text style={{fontSize: 15}}>&nbsp;Điểm bán mới</Text>
                                <Right>
                                    <Text>1</Text>
                                </Right>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {height: 35, justifyContent: 'center'}]}>
                            <View style={style.inline}>
                                <MaterialCommunityIcons
                                    style={[style.fontGreen, {width: 16, lineHeight: 20}]}
                                    name="cash-usd"
                                    size={14}
                                />
                                <Text style={{fontSize: 15}}>&nbsp;Số địa điểm đã mua hàng</Text>
                                <Right>
                                    <Text>0</Text>
                                </Right>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {height: 35, justifyContent: 'center'}]}>
                            <View style={style.inline}>
                                <MaterialCommunityIcons
                                    style={[style.fontRed, {width: 16, lineHeight: 20}]}
                                    name="marker-check"
                                    size={14}
                                />
                                <Text style={{fontSize: 15}}>&nbsp;Số địa điểm chăm sóc</Text>
                                <Right>
                                    <Text>0</Text>
                                </Right>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {height: 35, justifyContent: 'center'}]}>
                            <View style={style.inline}>
                                <FontAwesome
                                    style={[style.fontGreen, {width: 16, lineHeight: 20}]}
                                    name="dollar"
                                    size={14}
                                />
                                <Text style={{fontSize: 15}}>&nbsp;Số lương tạm tính</Text>
                                <Right>
                                    <Text>12.000.000</Text>
                                </Right>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
            <View style={frameworkStyle.content}>
                <View style={frameworkStyle.panelInfo}>
                    <View style={[frameworkStyle.panelContent, style.center]}>
                        <FontAwesome5
                            style={[style.fontBlue, style.fontBold]}
                            name="product-hunt"
                            size={19}
                        />
                        <Text style={[style.fontBlue, {fontWeight: '500', fontSize: 17}]}>
                            &nbsp;Model cần đẩy doanh số
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={style.display}>
                        <View style={[style.borderBottom, {height: 35, justifyContent: 'center'}]}>
                            <View style={style.inline}>
                                <Text style={{fontSize: 15}}>&nbsp;Máy lọc nước</Text>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {height: 35, justifyContent: 'center'}]}>
                            <View style={style.inline}>
                                <Text style={{fontSize: 15}}>&nbsp;Chảo chống dính</Text>
                            </View>
                        </View>
                        <View style={[style.borderBottom, {height: 35, justifyContent: 'center'}]}>
                            <View style={style.inline}>
                                <Text style={{fontSize: 15}}>&nbsp;Điều hòa</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Content>
    </Container>
);

export default Dashboard;
