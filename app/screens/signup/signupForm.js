//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,Text, Dimensions} from 'react-native';
import colors from "assets/colors/colors"
import {FormInput} from 'components/textInputs/textInput';
import { SubmitButton } from 'components/buttons/button';
import Entypo from "react-native-vector-icons/Entypo";
import { StackActions, NavigationActions} from 'react-navigation';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Signup,signupValidation} from "./signupController"
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
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            fullName: '',
            email: '',
            password: '',
            phone: '',
            hidePassword:true,
            navigation:props.signupScreen
        }
    }

    
    //------------- Function for change visibility of passwords -------------//    
    showPassword = () => {
        if (this.state.hidePassword == true) {
            this.setState({
                hidePassword: false
            });
        } else {
            this.setState({
                hidePassword: true
            });
        }
    }

    //------------- Functions for Text-Input Changed -------------//
    handleChange(evt, name,error) {
        this.setState(() => ({ [name]: evt ,[error]:''}));
    }
    
    //------------- Functions for login -------------//
    loginPressed = () => {
        const { fullName, email, phone, password, gender } = this.state; 
        validation =   signupValidation(fullName, email, phone, password, gender);
        if(validation.status){
            this.setState(validation);
            response =   Signup(fullName, email, phone, password, gender);
            if(response){
                this.state.navigation.navigation.dispatch(chnageRoute("HomeScreen"))
            }
        }else{
            this.setState(validation);
        }
    }
    
     
    render() {
        return (
            <View>
                <View style={styles.inputLogin}>
                    <Entypo 
                        style={styles.iconWrap} 
                        size={20} 
                        name="user"
                    />
                    <FormInput 
                        placeholdertext="Full Name*"
                        value={this.state.fullName}
                        onChange={(evt) => this.handleChange(evt, "fullName","fullNameErr")} 
                        keyboardType='default' 
                        placeholderTextColor={colors.placeholderTextColor} 
                        style={[styles.input,styles.romanFont, {color:'white',alignSelf:'center',}]}
                    />
                </View>
                <Text style={{color:colors.red,marginLeft:20,height:20}}>{this.state.fullNameErr}</Text>
                <View style={styles.inputLogin}>
                    <MaterialIcons 
                        style={styles.iconWrap} 
                        size={20} 
                        name="email"
                    />
                    <FormInput 
                        placeholdertext="Email Address*"
                        value={this.state.email}
                        onChange={(evt) => this.handleChange(evt, "email","emailErr")} 
                        keyboardType="email-address" 
                        placeholderTextColor={colors.placeholderTextColor} 
                        style={[styles.input,styles.romanFont, {color:'white',alignSelf:'center',}]}
                    />
                </View>
                <Text style={{color:colors.red,marginLeft:20,height:20}}>{this.state.emailErr}</Text>
                <View style={styles.inputLogin}>
                    <Entypo 
                        style={styles.iconWrap} 
                        size={20} 
                        name="mobile"
                    />
                    <FormInput 
                        placeholdertext="mobile number"
                        value={this.state.phone}
                        onChange={(evt) => this.handleChange(evt, "phone","phoneErr")} 
                        keyboardType='numeric' 
                        placeholderTextColor={colors.placeholderTextColor} 
                        style={[styles.input,styles.romanFont, {color:'white',alignSelf:'center',}]}
                    />
                </View>
                <Text style={{color:colors.red,marginLeft:20,height:20}}>{this.state.phoneErr}</Text>
                <View style={styles.inputLogin}>
                    <Entypo 
                        style={styles.iconWrap} 
                        size={20} 
                        name="lock"
                    />
                    <FormInput 
                        placeholdertext="Password"  
                        secureTextEntry = { this.state.hidePassword } 
                        value={this.state.password} 
                        onChange={(evt) => this.handleChange(evt, "password","passwordErr")} 
                        placeholderTextColor={colors.placeholderTextColor} 
                        style={[styles.input,styles.romanFont,{color:'white',alignSelf:'center'}]}
                    />
                    <Entypo 
                        size={20} 
                        style={{color:'white',alignSelf:'center',right:10}} 
                        name= {this.state.hidePassword == true ?"eye-with-line" : "eye" } 
                        onPress={() => this.showPassword()}
                    />  
                </View>
                <Text style={{color:colors.red,marginLeft:20,height:20}}>{this.state.passwordErr}</Text>
                <SubmitButton 
                    buttonStyle={[styles.buttonStyle,{marginTop:height*0.025}]} 
                    title="CREATE ACCOUNT" 
                    textColor={colors.white} 
                    action={() =>this.loginPressed()}
                />      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputLogin: {
        flexDirection: "row",
        width:width*0.85,
        height:height*0.07,
        borderBottomWidth: 1,
        borderBottomColor:colors.white,
        borderBottomWidth: 1, 
        marginLeft:20,
        marginRight:20,
    },
    iconWrap: {
        marginTop:13,
        marginBottom:5,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        color:'white'
    },
    input: {
        flex: 1,
        paddingHorizontal: 8,
        color : "white",
    },
    loginBtn:{
        backgroundColor: 'transparent',
        marginTop:25,
        marginLeft:20,
        marginRight:20,
        borderWidth: 1,
        borderColor:colors.white,
        borderWidth: 1, 

    },
    buttonStyle:{
        height:height*0.09,
        width:width*0.85,
        marginBottom:12,
        marginLeft:20,
        marginRight:20,
        borderRadius:7,
        backgroundColor:"#8bd98e",
        justifyContent:'center'
    }
});


//make this component available to the app
export default SignupForm;