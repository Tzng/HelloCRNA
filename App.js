import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Text, StyleSheet} from 'react-native';
//页面组件
import DynamicScreen from './components/weixin/DynamicScreen';
import FindScreen from './components/weixin/FindScreen';
import MyScreen from './components/weixin/MyScreen';
import DynamicDetailScreen from './components/weixin/DynamicDetailScreen';
import HeadScreen from './components/HeadScreen';

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
        navigationOptions: ({ navigation }) => ({
            //返回一个组件，以在标签栏中显示。
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                //console.log(routeName);
                let iconName;
                //循环判断改变三个底部图标的icon，带outline为未选中
                if (routeName === 'dynamic') {
                    iconName = `ios-text${focused ? '' : '-outline'}`;
                    if(focused){
                        //选中
                        //navigation.setParams({sss: "213"});
                        console.log(iconName)
                        title = 'dynamic';
                    }else{
                        console.log('dynamic')
                    }
                } else if (routeName === 'find') {
                    iconName = `ios-bulb${focused ? '' : '-outline'}`;
                } else if (routeName === 'my') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                }

                // 你可以返回任何你喜欢的组件，我们通常返回的会是一个图标组件
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
            tabBarOnPress: ({previousScene,scene,jumpToIndex})=>{
                console.log(jumpToIndex)
            }
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

// 总路由，这里的话会自带头部，所以还要对头部进行修改
const StackScreen = createStackNavigator({
    //底部导航
    dynamicStack: {
        screen: TabScreen,
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
    },
    //详情页
    dynamicdetail: {
        path: 'dynamicdetail/:name',
        screen: DynamicDetailScreen,
    },
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
                <StackScreen />
            </React.Fragment>
        )
    }
}