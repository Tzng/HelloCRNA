import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import SettingsScreen from './components/SettingsScreen';
import DynamicScreen from './components/weixin/DynamicScreen';
import FindScreen from './components/weixin/FindScreen';

//底部导航栏
export default createBottomTabNavigator(
    {
        动态: DynamicScreen,
        发现: FindScreen,
        我的: SettingsScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '动态') {
                    iconName = `ios-text${focused ? '' : '-outline'}`;
                } else if (routeName === '发现') {
                    iconName = `ios-bulb${focused ? '' : '-outline'}`;
                } else if (routeName === '我的') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        //改变标签时是否进行动画
        animationEnabled: false,
        //是否允许在标签之间滑动
        swipeEnabled: false,
    }
);