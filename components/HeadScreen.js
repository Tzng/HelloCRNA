import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//头部公共组件
class HeadScreen extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const title = (this.props.title)?this.props.title:'微信';
        return (
            <View style={{height:35,backgroundColor:'#242529',padding:10,top:25}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <Text style={{color:'#ffffff'}}>{title}</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text><Icon name="md-add" color="#fff" size={18} /></Text>
                    </View>
                </View>
            </View>
        );
    }
}

module.exports = HeadScreen;