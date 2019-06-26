//import liraries
import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Dimensions, StatusBar, Text ,Platform} from 'react-native';
import images from "components/images/images"
import {LandingButton} from "components/buttons/button"

const {height,width} =  Dimensions.get('window');

// create a component
class Landing extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                   backgroundColor="black"
                   barStyle="light-content"
                />
                <View style={styles.container}>
                    <Image resizeMode="stretch" source={images.homeimage} style={{maxHeight: height*0.60, width: width}} />
                </View>
                <View style={styles.containerTwo}>
                    <Text style={{textAlign:'center',fontSize:16 ,fontWeight:'700',color:'white',marginTop:10}}> THE MOST FULFULLING SHOPPING EXPERIENCE</Text>
                    <LandingButton action={() => navigate("LoginScreen")}  bottonColor={"transparent"}  buttonStyle={[styles.buttonStyle,{marginTop:height*0.085}]} title="LOG IN" />
                    <LandingButton action={() => navigate("SignupScreen")} bottonColor={"transparent"} buttonStyle={[styles.buttonStyle]} title="SIGN UP" />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    containerTwo: {
        flex: 1,
        alignItems:'center'
    },
    buttonStyle:{
        height:height*0.09,
        width:width*0.95,
        marginBottom:12,
        borderRadius:7,
        backgroundColor:"#8bd98e",
        justifyContent:'center'
    }
});

//make this component available to the app
export default Landing;