import * as React from 'react';
import {
    Text, ListItem, View, Right
} from 'native-base';
import {
    ImageBackground,
    ScrollView,
    FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from '../../styles/sidebar';
import style2 from '../../styles/style';
import * as api from '../../constants/api';
import {NavigationActions, StackActions} from "react-navigation";

const routes = [
    {
        route: 'Places',
        caption: 'Điểm bán hàng',
        icon: 'map-pin',
        fontIcon: Feather,
        index: 1,
    },
    {
        route: 'PlaceDetail',
        caption: 'Tra cứu nguồn gốc',
        icon: 'search-minus',
        fontIcon: FontAwesome,
        index: 2,
    },
    {
        route: 'Tra cứu bảo hành',
        caption: 'Tra cứu bảo hành',
        icon: 'journal-whills',
        fontIcon: FontAwesome5,
    },
    {
        route: 'Kích hoạt bảo hành',
        caption: 'Kích hoạt bảo hành',
        icon: 'shield-outline',
        fontIcon: MaterialCommunityIcons,
    },
    {
        route: 'Logout',
        caption: 'Đăng xuất',
        icon: 'sign-out',
        fontIcon: FontAwesome,
    },
];

const Sidebar = ({...props}) => (
    <ScrollView>
        <View style={style.menuMainTop}>
            <View style={style.menuLogo}>
                <ImageBackground
                    source={{uri: `${api.BASE_URL}${props.navigation.getParam('params').logo}`}} // eslint-disable-line
                    // source={require('../../images/logo-kangaroo.png')} // eslint-disable-line
                    style={{
                        width: 200,
                        height: 40,
                    }}
                />
            </View>
            <View style={style.menuSubLogo}>
                <Text style={{
                    color: '#d82c1e',
                }}
                >
                    Hello&nbsp;
                    {props.navigation.getParam('params').userName}
                </Text>
            </View>
        </View>
        <FlatList
            data={routes}
            extraData={props.reRenderSidebar}
            renderItem={({item}) => (
                <ListItem
                    style={[style.menuItem,
                        {marginLeft: 0, paddingLeft: 10},
                        props.screen === item.route ? style2.backgroundActive : {}
                    ]}
                    button
                    onPress={() => {
                        item.route === 'Logout' // eslint-disable-line
                            ? props.logOut() : props.changeScreen(item.route);
                    }}
                >
                    <item.fontIcon
                        size={24}
                        style={style.menuIconLeft}
                        name={item.icon}
                    />
                    <Text style={{textAlign: 'left'}}>{item.caption}</Text>
                    <Right style={{position: 'absolute', right: 23}}>
                        <FontAwesome5
                            size={8}
                            color={props.screen === item.route ? '#e74c3c' : '#a5a5a5'}
                            name="circle"
                        />
                    </Right>
                </ListItem>
            )}
        />
        <View style={[style.menuDivider, style2.center, style2.inline]}>
            <Text style={style.menuDividerText}>ALL RIGHTS RESERVED, SALEFIE</Text>
            <Right style={{marginRight: 20}}>
                <FontAwesome5 name="copyright"/>
            </Right>
        </View>
    </ScrollView>
);

export default Sidebar;
