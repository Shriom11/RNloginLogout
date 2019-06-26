import {Dimensions,Platform} from 'react-native'
const {height,width} =  Dimensions.get('window');

export default {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    splashStyle:{
        width:'100%', 
        height: '100%'
    },
    SplashScreen_RootView: {
        justifyContent: 'center',
        flex:1,
        position: 'absolute',
        width: '100%',
        height: '100%',   
    },
    romanFont:{
        fontFamily:'HelveticaNeueLTStd-55_Roman' 
    },
    mediumFont:{
        fontFamily:'HelveticaNeueLTStd-Md_65_medium'
        }
};