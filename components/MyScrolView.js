import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

//获取屏幕的宽度
const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

class MyScrolView extends  Component {

    render () {
        return(
            <ScrollView
                horizontal=true
            >
                <View style={{backgroundColor:"red",width:100,height:100}}>
                    <Text>11</Text>
                </View>
                <View style={{backgroundColor:"blue",width:100,height:100}}>
                    <Text>11</Text>
                </View>
                <View style={{backgroundColor:"yellow",width:100,height:100}}>
                    <Text>11</Text>
                </View>
            </ScrollView>
        )
    }

}

module.exports = MyScrolView;