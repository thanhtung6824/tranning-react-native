import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    fontBlue: {
        color: '#3598dc',
    },
    fontRed: {
        color: '#f36a5a',
    },
    fontYellow: {
        color: '#ffce54',
    },
    fontGreen: {
        color: '#7fb92c',
    },
    fontBlueOleo: {
        color: '#94A0B2',
    },
    fontWhite: {
        color: '#ffffff',
    },
    activeColor: {
        color: '#51b7dc',
    },
    backgroundActive: {
        backgroundColor: '#e9edef',
    },
    backgroundWhite: {
        backgroundColor: '#ffffff',
    },
    backgroundGray: {
        backgroundColor: '#666',
    },
    backgroundGrayWithBoxShadow: {
        backgroundColor: '#666',
        shadowColor: '#999',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignStretch: {
        alignSelf: 'stretch',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontBold: {
        fontWeight: 'bold',
    },
    dashboardStat: {
        borderRadius: 4,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    yellowLemon: {
        borderTopWidth: 4,
        borderTopColor: '#f7ca18',
    },
    display: {
        marginBottom: 5,
    },
    numberRevenue: {
        marginBottom: 5,
    },
    inline: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    progress: {
        backgroundColor: '#f5f5f5',
    },
    progressBar: {
        backgroundColor: '#5C9BD1',
    },
    status: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#e1e5ec',
    },
    tableTitleInfo: {
        backgroundColor: '#f5f8fd',
        width,
    },
    actionMenuBottom: {
        backgroundColor: '#eff3fd',
        width,
        borderWidth: 1,
        borderColor: '#c2cad8',
    },
});
export default styles;
// # sourceMappingURL=style.js.map
