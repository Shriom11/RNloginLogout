import React, { Component } from 'react';
import {View, Modal,ActivityIndicator} from 'react-native'; 


const Model = ({ isLoading }) => (
    <Modal
        transparent={true}
        animationType={'fade'}
        visible={isLoading}
        onRequestClose={() => {}}>
        <View 
            style={{flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: '#00000040'}}>
            <View>
                <ActivityIndicator
                animating={isLoading} size="large" color="black" />
            </View>
        </View>
    </Modal>
)

export default Model;