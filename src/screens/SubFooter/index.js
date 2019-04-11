import * as React from 'react';
import {Button, Footer, FooterTab} from 'native-base';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from '../../styles/style';

const SubFooter = ({...props}) => (
    <Footer>
        <FooterTab style={style.backgroundWhite}>
            <Button>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 35,
                        height: 35,
                        backgroundColor: '#4B77BE',
                        borderRadius: 35,
                    }}
                >
                    <FontAwesome5 style={style.fontWhite} name="store-alt" size={22}/>
                </TouchableOpacity>
            </Button>
            <Button
                onPress={() => {
                    props.navigation.navigate('Schedule');
                }}
                vertical
            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 35,
                        height: 35,
                        backgroundColor: '#ffce54',
                        borderRadius: 35,
                    }}
                >
                    <FontAwesome style={style.fontWhite} name="image" size={22}/>
                </TouchableOpacity>
            </Button>
            <Button
                onPress={() => {
                    props.navigation.navigate('Photo');
                }}
                vertical
            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 35,
                        height: 35,
                        backgroundColor: '#7fb92c',
                        borderRadius: 35,
                    }}
                >
                    <FontAwesome style={style.fontWhite} name="dollar" size={22}/>
                </TouchableOpacity>
            </Button>
            <Button
                onPress={() => {
                    props.navigation.navigate('Orders');
                }}
                vertical
            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 35,
                        height: 35,
                        backgroundColor: '#94A0B2',
                        borderRadius: 35,
                    }}
                >
                    <FontAwesome5 style={style.fontWhite} name="store" size={22}/>
                </TouchableOpacity>
            </Button>
        </FooterTab>
    </Footer>
);

export default SubFooter;
