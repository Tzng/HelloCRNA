import React from 'react';
import { FlatList, StyleSheet,View, Text,Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';

//通讯录组件
export default class ContactsScreen extends React.Component {
    static navigationOptions = {
        title: '通讯录',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-contacts-outline" size={26} color={tintColor} />
        ),
        headerStyle:{
            backgroundColor:'#242529',
            height: 45
        },
        headerTintColor:'#fff',
        headerRight:(<Icon name="ios-mail" color="#fff" size={25} style={{marginRight:20}}/>),
    };
    render(){
        return (
            <View style={[styles.container,styles.findBody]}>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="md-person-add" color="#51BBE5" size={22} />
                    <Text style={styles.findViewText}>新的朋友</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-people-outline" color="#51BBE5" size={22} />
                    <Text style={styles.findViewText}>群聊</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-bookmark-outline" color="#BAEE44" size={22} />
                    <Text style={styles.findViewText}>标签</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-contact-outline" color="#3399FF" size={22} />
                    <Text style={styles.findViewText}>公众号</Text>
                </View>
                <View style={{ marginTop:15}}>
                    <Text>我的企业</Text>
                </View>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-color-filter-outline" color="#55C1E7" size={22} />
                    <Text style={styles.findViewText}>奔驰集团</Text>
                </View>
                <View style={{ marginTop:10}}>
                    <Text>A</Text>
                </View>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-cloud-outline" color="#55C1E7" size={22} />
                    <Text style={styles.findViewText}>阿里云</Text>
                </View>
                <View style={{ marginTop:10}}>
                    <Text>B</Text>
                </View>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-basketball-outline" color="#55C1E7" size={22} />
                    <Text style={styles.findViewText}>B.乔丹</Text>
                </View>

            </View>
        )
    }
}

//组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex:1,
        flexDirection:'row',
        borderBottomWidth:6,
        borderBottomColor:'#F2F2F2',
        padding:10
    },
    name:{
        color:'#388BFF',
        fontSize:16
    },
    text:{
        color:'#232323',
        fontSize:16
    },
    time:{
        color:'gray',
        fontSize:12,
        marginTop:8
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

//然后把这个组件放到堆栈导航里面去
const ContactsStackScreen = createStackNavigator({
    contacts:{
        screen: ContactsScreen
    }
})

module.exports = ContactsStackScreen;