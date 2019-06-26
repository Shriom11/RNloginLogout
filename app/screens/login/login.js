//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Dimensions, Image, Platform, ScrollView,TouchableOpacity} from 'react-native';
import LoginForm from  './loginForm';
import SocialLogin from  'components/socialLogin/sociallogin';
import colors from "assets/colors/colors";
import {Commonheader} from 'components/header/header';
import images from "components/images/images"
const {height,width} =  Dimensions.get('window');


// create a component
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }

    render() {
        const {navigate,goBack} = this.props.navigation;
        return (
            <View style={{flex:1,backgroundColor:'black'}}>
                <Commonheader 
                    title = "LOG-IN" 
                    leftAction={()=> goBack()}
                    backgroundColor="black"
                    barStyle="light-content"
                    transparent={true}
                /> 
                <View style={styles.borderCss}></View> 
                <View style={styles.container}>
                    <ScrollView style={{flex:1}}>
                        <View style={styles.logoContainer}>
                            <Image source ={images.logo} />
                        </View>

                        <LoginForm  loginscreen={this.state.props} />

                        <Text 
                            onPress={()=> alert("work in progress")}
                            style = {styles.forgotpass}
                            > FORGOT PASSWORD?
                        </Text> 
                        <Text 
                            onPress={() => navigate("SignupScreen")}
                            style = {styles.newSignup} 
                            > New to Dope? 
                            <Text style={{color:"#800000"}}> Signup</Text> now
                        </Text> 
                        
                        <View style={styles.subLoginView}>
                            <View style={styles.lineView}/>
                            <Text style={styles.bottomHeading}>{'  '+' Or Login With ' +'  '}</Text>
                            <View style={styles.lineView}/>
                        </View>

                        <SocialLogin loginscreen={this.state.props} />

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
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:height*0.02
    },
    forgotpass:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'white',
    },
    newSignup:{
        textAlign:'center',
        fontSize:16,
        color:'white',
        marginTop:height*0.0250,

    },
    Orlogin:{
        textAlign:'center',
        fontSize:16,
        color:"#8bd98e",
        fontWeight:'500',
        marginTop:height*0.03,

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
export default Login;