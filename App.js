import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Text, StyleSheet} from 'react-native';
//页面组件
import DynamicStackScreen from './components/weixin/DynamicScreen';
import FindStackScreen from './components/weixin/FindScreen';
import MyStackScreen from './components/weixin/MyScreen';

//底部导航栏
const TabScreen = createBottomTabNavigator(
    {
        dynamic: {
            screen: DynamicStackScreen,
        },
        find: {
            screen: FindStackScreen,
        },
        my: {
            screen: MyStackScreen,
        },
    },
    {
        //默认路由，可以不用配置，默认是第一个
        initialRouteName: 'dynamic',
        navigationOptions: ({ navigation }) => ({
            //返回一个组件，以在标签栏中显示。
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'dynamic') {
                    iconName = `ios-text${focused ? '' : '-outline'}`;
                } else if (routeName === 'find') {
                    iconName = `ios-bulb${focused ? '' : '-outline'}`;
                } else if (routeName === 'my') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                }

                // 你可以返回任何你喜欢的组件，我们通常返回的会是一个图标组件
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        //改变标签时是否进行动画
        animationEnabled: true,
        //是否允许在标签之间滑动
        swipeEnabled: true,
    }
)

export default class MyApp extends React.Component{
    render(){
        return (
            <React.Fragment>
                <TabScreen />
            </React.Fragment>
        )
    }
}

