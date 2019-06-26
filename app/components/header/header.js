import React from 'react';
import {Image,Dimensions,StatusBar ,Text} from 'react-native';
import { Header, Left, Body, Button, Right,Title } from 'native-base';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import colors from '../../assets/colors/colors';
const {width,height} =  Dimensions.get('window'); 

export const Commonheader =  ({backgroundColor="white", barStyle="dark-content",transparent=false, title,rightImgsourceOne,rightText,rightImgsourceTwo,rightActionone,leftAction,rightActiontwo}) => {
    return (
        <Header transparent ={transparent} >
            <StatusBar
                   backgroundColor={backgroundColor}
                   barStyle={barStyle}
                />
            <Left style={{flex:1}}>
                <Button transparent onPress = {leftAction} >
                    <MaterialIcons name="arrow-back" size={25} style ={{color:colors.white}}/>
                </Button>
            </Left>
            <Body style={{flex:1}}>
                <Title style={[{alignSelf:'center',width:width-100,color:colors.white}]}>{title}</Title>
            </Body>
            <Right style={{flex:1}}>
                <Button transparent onPress = {rightActionone} >
                    <Image source={rightImgsourceOne}></Image>
                </Button>
                <Text style={{color:colors.white,fontSize:15,fontWeight:'600',alignSelf:"center"}} >{rightText}</Text>
                <Button transparent onPress = {rightActiontwo} >
                    <Image source={rightImgsourceTwo}></Image>
                </Button>
            </Right>
        </Header> 
      
    );
  }
