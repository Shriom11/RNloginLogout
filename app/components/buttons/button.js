import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
const {width,height} =  Dimensions.get('window'); 

export const LandingButton =  ({ buttonStyle,title,source,action, bottonColor,}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={buttonStyle} onPress={action}>
            <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontSize:15}}>{title}</Text>
        </TouchableOpacity>
    );
  }
  
export const SubmitButton = ({ buttonStyle,title,source,action, bottonColor}) => {
      return (
        <TouchableOpacity activeOpacity={0.6} style={buttonStyle} onPress={action}>
            <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontSize:15}}>{title}</Text>
        </TouchableOpacity>
      )
  }
  
const styles = StyleSheet.create({

  btnTextStyle :{
    textAlign:'center',  
    fontWeight: 'bold',
  },
  BtnText:{
      fontSize: 20
  }, 
});

