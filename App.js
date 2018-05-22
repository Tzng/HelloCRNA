import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FindScreen from  './components/weixin/FindScreen'
import DynamicScreen from  './components/weixin/DynamicScreen'
import ContactsScreen from  './components/weixin/ContactsScreen'
import MyScreen from  './components/weixin/MyScreen'
import DynamicDetailScreen from  './components/weixin/DynamicDetailScreen'

const RootTabs = createMaterialTopTabNavigator(
    {
        dynamic: {
            screen: DynamicScreen,
        },
        contacts: {
            screen: ContactsScreen,
        },
        find: {
            screen: FindScreen,
        },
        my:{
            screen:MyScreen,
        }
    },
    {
        initialRouteName: 'contacts',
        tabBarPosition: 'bottom',//选项卡位置
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#28a745',//选中颜色
            inactiveTintColor:'#232323',//未选中颜色
            //设置选项卡的背景颜色
            style: {
                backgroundColor: '#F2F2F2'
            },
            //去掉安卓点击之后的小黄线
            indicatorStyle: {
                height: 0
            },
            //是否显示icon图标
            showIcon:true,
            //选项卡样式
            tabStyle:{
                height:46,
            },
            //icon样式
            iconStyle:{
                marginBottom:-6,
                marginTop:10
            }
        }
    });

// myapp路由
const MyApp = createStackNavigator({
    dynamicStack: {
        screen: RootTabs,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#242529',
                height: 45
            },
            headerTintColor:'#fff',
            headerRight:(<Ionicons name="md-add" color="#fff" size={20} style={{marginRight:20}}/>),
            headerTitle:"留"
        }
    },
    dynamicDetail: {
        path: 'dynamicDetail/:name',
        screen: DynamicDetailScreen,
    },
},{
    headerMode: 'none'
});


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


export default MyApp;