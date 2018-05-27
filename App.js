import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FindScreen from  './components/weixin/FindScreen'
import DynamicScreen from  './components/weixin/DynamicScreen'
import ContactsScreen from  './components/weixin/ContactsScreen'
import MyScreen from  './components/weixin/MyScreen'
import DynamicDetailScreen from  './components/weixin/DynamicDetailScreen'

const RootTabs = createMaterialTopTabNavigator(
    {
        dynamic: {
            screen: DynamicScreen,
            navigationOptions:{
                title: '动态',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-text-outline" size={26} color={tintColor} />
                ),
            }
        },
        contacts: {
            screen: ContactsScreen,
            navigationOptions:{
                title: '通讯录',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-contacts-outline" size={26} color={tintColor} />
                ),
            }
        },
        find: {
            screen: FindScreen,
            navigationOptions:{
                title: '发现',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-compass-outline" size={26} color={tintColor} />
                ),
            }
        },
        my:{
            screen:MyScreen,
            navigationOptions:{
                title: '我的',
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-person-outline" size={26} color={tintColor} />
                ),
            }
        }
    },
    {
        initialRouteName: 'dynamic',
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
        navigationOptions:({ navigation }) => {

            const {index} = navigation.state;

            let headerJson = {
                headerStyle: {
                    backgroundColor: '#242529',
                    height: 45
                },
                headerTintColor: '#fff',
            };

            console.log(index);
            if(index == '0'){
                headerJson.title = '动态'
                headerJson.headerRight = (<Icon name="md-add" color="#fff" size={20} style={{marginRight:20}}/>);
            }else if (index == '1'){
                headerJson.title = '通讯录'
                headerJson.headerRight = (<Icon name="ios-mail" color="#fff" size={25} style={{marginRight:20}}/>);
            }else if (index == '2'){
                headerJson.title = '发现';
                headerJson.headerRight = (
                    <Button
                        onPress = {() => alert("我是按钮")}
                        title = "按钮"
                    />
                );
            }else{
                headerJson.title = '我的';
                headerJson.headerRight = (<Icon name="ios-mail" color="#fff" size={25} style={{marginRight:20}}/>)
            };
            console.log(headerJson);
            return headerJson
        }
    },
    dynamicDetail: {
        path: 'dynamicDetail/:name',
        screen: DynamicDetailScreen,
    },
},{
    //每个组件都使用自带的头部，所以，就不显示头部了
    //headerMode: 'none'
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

export default class App extends React.Component {
    render() {
        return <MyApp />;
    }
}