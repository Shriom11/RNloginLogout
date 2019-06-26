import React, { Component } from 'react';
import {TextInput } from 'react-native';

export const FormInput = ({ placeholdertext,name,action,secureTextEntry,value,onChange, editable,selectTextOnFocus,keyboardType,maxLength,placeholderTextColor,style,numberOfLines,multiline}) => {
  return (
    <TextInput 
            placeholder={placeholdertext} 
            placeholderTextColor={placeholderTextColor}
            style={style} 
            onTouchEnd={action}
            name={name}
            secureTextEntry={secureTextEntry} 
            underlineColorAndroid='transparent'
            value={value} 
            onChangeText={onChange}
            editable={editable} 
            selectTextOnFocus={selectTextOnFocus} 
            keyboardType={keyboardType}   
            maxLength={maxLength} 
            numberOfLines={numberOfLines}
            multiline={multiline} 
        />
  )
}


