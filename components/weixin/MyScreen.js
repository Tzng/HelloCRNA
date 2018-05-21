import React,{Component} from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';

//我的组件
class MyScreen extends Component {

    //覆盖共享的navigationOptions

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: "你好",
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: "#2f27ff",
            },
            headerTintColor: "#13dfff",
        };
    };

    render(){
        return (
            <React.Fragment>
                <View style={[styles.container,styles.findBody]}>
                    <View style={styles.findView}>
                        <Icon style={[styles.findViewIcon,{flex:2}]} name="ios-contacts-outline" color="#3399FF" size={60} />
                        <View style={[styles.findViewText,{flex:8,justifyContent:'center'}]}>
                            <Text>全球变暖</Text>
                            <Text style={{color:'gray'}}>微信号：weibo</Text>
                        </View>

                    </View>

                    <View style={styles.findView}>
                        <Icon style={styles.findViewIcon} name="ios-cash-outline" color="#3399FF" size={22} />
                        <Text style={styles.findViewText}>钱包</Text>
                    </View>

                    <View style={styles.findView}>
                        <Icon style={styles.findViewIcon} name="ios-add-circle-outline" color="#51BBE5" size={22} />
                        <Text style={styles.findViewText}>收藏</Text>
                    </View>

                    <View style={[styles.findView,styles.findMT]}>
                        <Icon style={styles.findViewIcon} name="ios-images-outline" color="#51BBE5" size={22} />
                        <Text style={styles.findViewText}>相册</Text>
                    </View>

                    <View style={[styles.findView,styles.findMT]}>
                        <Icon style={styles.findViewIcon} name="ios-tablet-portrait" color="#BAEE44" size={22} />
                        <Text style={styles.findViewText}>卡包</Text>
                    </View>

                    <View style={[styles.findView,styles.findMT]}>
                        <Icon style={styles.findViewIcon} name="ios-sad-outline" color="#3399FF" size={22} />
                        <Text style={styles.findViewText}>表情</Text>
                    </View>

                    <View style={styles.findView}>
                        <Icon style={styles.findViewIcon} name="ios-settings-outline" color="#55C1E7" size={22} />
                        <Text style={styles.findViewText}>设置</Text>
                    </View>

                </View>
            </React.Fragment>
        )
    }
}

//组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    //发现组件样式
    findView:{
        backgroundColor:'#fff',
        marginTop:15,
        padding:10,
        justifyContent:'center',
        flexDirection:'row'
    },
    findViewIcon:{
        flex:1
    },
    findViewText:{
        flex:9,
        marginTop:1
    },
    findBody:{
        backgroundColor:'#EBEBEB'
    },
    findMT:{
        marginTop:0,
        borderTopWidth:1,
        borderTopColor:'#EBEBEB'
    }
});

// 路由，这里的话会自带头部，所以还要对头部进行修改
const MyStackScreen = createStackNavigator({
    my: {
        screen: MyScreen,
    },
})

module.exports = MyStackScreen;