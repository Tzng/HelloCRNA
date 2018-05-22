import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Text, StyleSheet} from 'react-native';
//页面组件
import DynamicScreen from './components/weixin/DynamicScreen';
import FindScreen from './components/weixin/FindScreen';
import MyScreen from './components/weixin/MyScreen';
import DynamicDetailScreen from './components/weixin/DynamicDetailScreen';

//底部导航栏
const TabScreen = createBottomTabNavigator(
    {
        dynamic: {
            screen: DynamicScreen,
        },
        find: {
            screen: FindScreen,
        },
        my: {
            screen: MyScreen,
        },
    },
    {
        //默认路由，可以不用配置，默认是第一个
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
        },
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

// 总路由，这里的话会自带头部，所以还要对头部进行修改
const StackScreen = createStackNavigator({
    //底部导航
    dynamicStack: {
        screen: TabScreen,
    },
    //详情页
    dynamicdetail: {
        path: 'dynamicdetail/:name',
        screen: DynamicDetailScreen,
    }
},{
    /* The header config from HomeScreen is now here */
    navigationOptions: ({navigation}) => {

        console.log(navigation.state);

        let headerTitle = () => {
            navigation.state.routes.map((item) => {
                console.log(item);
            })
        }

        return ({
            headerStyle:styles.headerBar,
            headerTintColor:'#fff',
            headerRight:(<Ionicons name="md-add" color="#fff" size={20} style={{marginRight:20}}/>),
        })
    }
});

const styles = StyleSheet.create({
    //header样式
    headerBar:{
        backgroundColor:'#242529',
        height: 45
    }
})

export default class MyApp extends React.Component{

    static navigationOptions = {
        headerTitle: 'Home',
        headerTintColor:'#fff',
        /* No more header config here! */
    };

    render(){
        return (
            <React.Fragment>
                <TabScreen />
            </React.Fragment>
        )
    }
}