import React,{ Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//动态组件详情组件
class DynamicDetailScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return ({
            headerStyle:styles.headerBar,
            headerTintColor:'#fff',
            title: navigation.state.params.name,
        })
    }

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

    //header样式
    headerBar:{
        backgroundColor:'#242529',
        height: 45
    }
});

module.exports = DynamicDetailScreen;