//import liraries
import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import User from "store/user"
import colors from "assets/colors/colors"
import { StackActions, NavigationActions} from 'react-navigation';

const chnageRoute = (routename) => StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: routename
        }),
    ],
});


 // create a component
 class Home extends PureComponent {
    constructor(props) {
        super(props);
    }

    // function for logout
    logOut = () => {
        resopnce =  User.deleteUser();
        if(resopnce){
            this.props.navigation.dispatch(chnageRoute("LandingScreen"))
        }
    }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{User.fullName}</Text>
              <Text style={styles.info}>{User.phone}</Text>
              <Text style={styles.info}>{User.email}</Text>
              <Text style={styles.info}>Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={this.logOut}>
                <Text style={{color:colors.white,fontSize:16}}>LOGOUT</Text>  
              </TouchableOpacity>        
            </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  header:{
    backgroundColor: colors.white,
    height:130,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: colors.black,
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:50
  },
  name:{
    fontSize:22,
    color:colors.black,
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:5
  },
  description:{
    fontSize:16,
    color: colors.black,
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:30,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#8bd98e",
  },
});


//make this component available to the app
export default Home;