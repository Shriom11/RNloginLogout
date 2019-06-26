//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, ScrollView} from 'react-native';
import SignupForm from  './signupForm';
import colors from "assets/colors/colors";
import SocialLogin from  'components/socialLogin/sociallogin';
import {Commonheader} from 'components/header/header';
const {height,width} =  Dimensions.get('window');
// create a component
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style={{flex:1,backgroundColor:'black'}}>
                <Commonheader 
                        title = "SIGN-UP"
                        leftAction={()=> goBack()}
                        backgroundColor="black"
                        barStyle="light-content"
                        transparent={true}
                    />
                <View style={styles.borderCss}></View> 
                <View style={styles.container}>
                    <ScrollView style={{flex:1}}>

                        <SignupForm  signupScreen={this.state.props} />
                        
                        <Text 
                            onPress={() => navigate("LoginScreen")}
                            style = {styles.newSignup} 
                            > Already Have a account? 
                            <Text style={{color:"#800000"}}> Login</Text>
                        </Text>
                        <View style={styles.subLoginView}>
                            <View style={styles.lineView}/>
                            <Text style={styles.bottomHeading}>{'  '+' Or Signup With ' +'  '}</Text>
                            <View style={styles.lineView}/>
                        </View>

                        <SocialLogin signupScreen={this.state.props} />

                    </ScrollView>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    newSignup:{
        textAlign:'center',
        fontSize:16,
        color:'white',
        marginTop:height*0.0250,

    },
    borderCss:{
        borderBottomColor:colors.bordercolor,
        borderBottomWidth:1,
        marginBottom:height*0.02
    },
    newSignup:{
        textAlign:'center',
        fontSize:16,
        color:'white',
        marginTop:height*0.0250,

    },
    borderCss:{
        borderBottomColor:colors.bordercolor,
        borderBottomWidth:1,
        marginBottom:height*0.02
    },
    subLoginView:{
        alignSelf:'center',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:height*0.03
    },
    lineView:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width:40,
    },
    bottomHeading:{
        color:'white',  
        fontWeight:'bold',
        fontSize:16,
    },

});

//make this component available to the app
export default Signup;