//import liraries
import React, {Component} from 'react';
import {Image, View, StatusBar, Dimensions, StyleSheet, Platform} from 'react-native';
import images from "components/images/images"
import User from "../../store/user";
import { StackActions, NavigationActions} from 'react-navigation';

const {height,width} =  Dimensions.get('window');

const chnageRoute = (routename) => StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: routename
        }),
    ],
});


// create a component
 class LandingHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        }
    }

    Hide_Splash_Screen = () => {
        this.setState({ isVisible: false });
    }

    componentWillMount() {
        User.getUserFromStore()
        var that = this;
        setTimeout(function () { that.Hide_Splash_Screen() }, 3000);
    }
    render() {
        return ( 
            <View style = {styles.container}>
                <StatusBar backgroundColor = {'transparent'} translucent = {true} barStyle = "light-content" />
                { this.state.isVisible == true ?
                    <View style={{flex:1,backgroundColor:'black',height:height}}>
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                <Image source ={images.logo} />
                            </View>
                        </View>  
                    </View> 
                     :  User.id != '' ? this.props.navigation.dispatch(chnageRoute("HomeScreen")) :
                    this.props.navigation.dispatch(chnageRoute("LandingScreen"))
                } 
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
},
logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:height*0.02
},
});

export default LandingHome;