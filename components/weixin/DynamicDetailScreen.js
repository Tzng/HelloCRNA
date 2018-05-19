import React,{ Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//动态组件详情组件
class DynamicDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
        headerStyle:styles.headerBar,
        headerTintColor:'#fff'
    });
    render(){
        return (
            <View style={styles.container}>
                <Text>5555555555555555</Text>
            </View>
        );
    }
}

//组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


module.exports = DynamicDetailScreen;