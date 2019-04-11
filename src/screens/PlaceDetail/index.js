import * as React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Left,
    Body,
    Right,
    View,
    Footer,
    FooterTab,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native';
import {DrawerActions} from 'react-navigation';
import style from '../../styles/style';
import frameworkStyle from '../../styles/framework';

const marker = {
    position: {
        latitude: 10.865815796281,
        longitude: 106.62781902500001,
    },
    title: '172',
    description: '172 Tân Chánh Hiệp 10, Quận 12, Hồ Chí Minh',
    image: '../../../images/marker.png',
};

const PlaceDetail = ({...props}) => (
    <Container>
        <Header style={style.backgroundWhite}>
            <Left style={{flex: 1}}>
                <Button transparent>
                    <MaterialCommunityIcons
                        active
                        style={style.fontBlue}
                        name="chevron-left"
                        size={30}
                        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </Button>
            </Left>
            <Body style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Title style={[style.fontBlue, style.inline]}>
                172
                </Title>
            </Body>
            <Right style={{flex: 1}}>
                <MaterialCommunityIcons
                    style={style.fontBlue}
                    name="map-outline"
                    size={25}
                />
            </Right>
        </Header>
        <Content style={style.backgroundWhite}>
            <View style={frameworkStyle.containerMap}>
                <MapView
                    style={frameworkStyle.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 10.865815796281,
                        longitude: 106.62781902500001,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={marker.position}
                        title={marker.title}
                        description={marker.description}
                        source={require('../../images/marker.png')} // eslint-disable-line
                    />
                </MapView>
            </View>
            <View style={frameworkStyle.content}>
                <View style={frameworkStyle.panelInfo}>
                    <View style={[frameworkStyle.panelContent, style.center]}>
                        <Text style={[style.fontBlue, {fontWeight: '500', fontSize: 17}]}>
                            &nbsp;Thông tin địa
                            điểm
                        </Text>
                    </View>
                </View>
                <View>
                    <ScrollView
                        behaviour="height"
                        keyboardVerticalOffset={64}
                    >
                        <View style={style.display}>
                            <View style={[style.borderBottom, {
                                minHeight: 35,
                                justifyContent: 'center',
                            }, frameworkStyle.slide, frameworkStyle.table]}
                            >
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Sản phẩm bán chạy</Text>
                                </View>
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Máy lọc nước</Text>
                                </View>
                            </View>
                            <View style={[style.borderBottom, {
                                minHeight: 35,
                                justifyContent: 'center',
                            }, frameworkStyle.slide, frameworkStyle.table]}
                            >
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Giao dịch lần cuối</Text>
                                </View>
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>
                                        &nbsp;Địa điểm chưa được giao dịch
                                    </Text>
                                </View>
                            </View>
                            <View style={[style.borderBottom, {
                                minHeight: 35,
                                justifyContent: 'center',
                            }, frameworkStyle.slide, frameworkStyle.table]}
                            >
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Chăm sóc lần cuối</Text>
                                </View>
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>
                                        &nbsp;Địa điểm chưa được chăm sóc
                                    </Text>
                                </View>
                            </View>
                            <View style={[style.borderBottom, {
                                minHeight: 35,
                                justifyContent: 'center',
                            }, frameworkStyle.slide, frameworkStyle.table]}
                            >
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Ngành hàng</Text>
                                </View>
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Máy lọc nước</Text>
                                </View>
                            </View>
                            <View style={[style.borderBottom, {
                                minHeight: 35,
                                justifyContent: 'center',
                            }, frameworkStyle.slide, frameworkStyle.table]}
                            >
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Người đại diện</Text>
                                </View>
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Đại lý</Text>
                                </View>
                            </View>
                            <View style={[style.borderBottom, {
                                minHeight: 35,
                                justifyContent: 'center',
                            }, frameworkStyle.slide, frameworkStyle.table]}
                            >
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;Doanh thu tháng</Text>
                                </View>
                                <View style={style.inline}>
                                    <Text style={{fontSize: 15}}>&nbsp;0 đ</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Content>
        <Footer>
            <FooterTab style={style.tableTitleInfo}>
                <Left style={[style.inline, style.alignCenter]}>
                    <Text>&nbsp;</Text>
                    <Ionicons
                        style={style.fontRed}
                        name="ios-pin"
                        size={18}
                    />
                    <Text style={style.fontRed}>&nbsp;Hãy check in để bắt đầu làm việc</Text>
                </Left>
                <Right>
                    <View style={[style.inline, style.alignCenter]}>
                        <Button danger style={frameworkStyle.btnCircle}>
                            <Text> Check In </Text>
                        </Button>
                        <Text>&nbsp;</Text>
                    </View>
                </Right>
            </FooterTab>
        </Footer>
    </Container>
);

export default PlaceDetail;
