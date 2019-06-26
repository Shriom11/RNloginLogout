//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Dimensions, Image,TouchableOpacity} from 'react-native';
import { LoginManager,AccessToken,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import images from "components/images/images"
import {GoogleSignin, statusCodes } from 'react-native-google-signin';
const {height,width} =  Dimensions.get('window');

// create a component
class SocialLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }

    componentWillMount() {
        GoogleSignin.configure({
          //It is mandatory to call this method before attempting to call signIn()
          scopes: ['https://www.googleapis.com/auth/drive.readonly'],
          // Repleace with your webClientId generated from Firebase console
          webClientId:
            '1070426296835-f8u05t5e4idp5fjmu74j2q44jn6mbm4e.apps.googleusercontent.com',
            offlineAccess: true,
            forceConsentPrompt: true,
        });
      }

      _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
          await GoogleSignin.hasPlayServices({
            //Check if device has Google Play Services installed.
            //Always resolves to true on iOS.
            showPlayServicesUpdateDialog: true,
          });
          const userInfo = await GoogleSignin.signIn();
          alert(JSON.stringify(userInfo))
          console.log('User Info --> ', userInfo);
          this.setState({ userInfo: userInfo });
        } catch (error) {
            console.log('Message', error.message);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User Cancelled the Login Flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signing In');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services Not Available or Outdated');
          } else {
            console.log(error);
          }
        }
      };
     //=============================================/
    //       Authentication with Facebook-login   //
    //=============================================/
    onLoginFacebook = ( ) => {
        console.log("Asssssssssssssssssss")
        // LoginManager.setLoginBehavior('WEB_ONLY');
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => 
        {
            if (result.isCancelled) {
                return Promise.reject(new Error('The user cancelled the request'));
            }

            console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
            // get the access token
            return AccessToken.getCurrentAccessToken();
        }).then(data => {
            const infoRequest = new GraphRequest(
                '/me?fields=name,email,picture',
                null,
                this._responseInfoCallback
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
        })
        .catch((error) => {
            console.log(`Facebook login fail with error: ${error}`);
        });
    
    }
  
    //Create response callback.
    _responseInfoCallback = (error, result) => {
        alert("result"+result)
        if (error) {
            alert("error"+error)
            alert('Error fetching data: ' + error.toString());
        } else {  
            alert(JSON.stringify(result))
            console.log(`Facebook Login Credentials : ${JSON.stringify(result)}`);  
        }
    }

    render() {
        return (
            <View style={styles.socialBtnLogin}>
                <TouchableOpacity style={styles.fbBtn}  onPress={() => this.onLoginFacebook()}>
                    <EvilIcons style={styles.fbIcon} size={35} name="sc-facebook"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleBtn}  onPress={() => this._signIn()} >
                    <Image style={styles.googleIcon} source={images.googleIcon} />    
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    socialBtnLogin:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop:height*0.02
    },
    fbBtn:{
        width: 50, 
        height: 35, 
        borderRadius:5,
        backgroundColor: '#4385f4',
        justifyContent:'center', 
        alignContent:'center',
        marginLeft:80,
    },
    googleBtn:{
        width: 50, 
        height: 35,
        borderRadius:5,
        backgroundColor: 'white',
        justifyContent:'center',
        alignContent:'center',
        marginRight:80, 
    },
    fbIcon:{
        color: "#fff", 
        alignSelf:'center' 
    },
    googleIcon:{
        width:25,
        height:25,
        justifyContent:'center', 
        alignContent:'center',
        alignSelf:'center' 
    },
});

//make this component available to the app
export default SocialLogin;