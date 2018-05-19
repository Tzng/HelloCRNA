import React,{Component} from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadScreen from '../HeadScreen';

//发现组件
class FindScreen extends Component {
    render(){
        return (
            <React.Fragment>
                <HeadScreen title="发现"></HeadScreen>
                <View style={[styles.container,styles.findBody]}>
                    <View style={styles.findView}>
                        <Icon style={styles.findViewIcon} name="ios-contacts-outline" color="#3399FF" size={22} />
                        <Text style={styles.findViewText}>朋友圈</Text>
                    </View>


                    <View style={styles.findView}>
                        <Icon style={styles.findViewIcon} name="ios-crop-outline" color="#51BBE5" size={22} />
                        <Text style={styles.findViewText}>扫一扫</Text>
                    </View>

                    <View style={styles.findView}>
                        <Icon style={styles.findViewIcon} name="ios-search-outline" color="#51BBE5" size={22} />
                        <Text style={styles.findViewText}>搜一搜</Text>
                    </View>

                    <View style={styles.findView}>
                        <Icon style={styles.findViewIcon} name="ios-tablet-portrait" color="#BAEE44" size={22} />
                        <Text style={styles.findViewText}>购物</Text>
                    </View>

                    <View style={[styles.findView,styles.findMT]}>
                        <Icon style={styles.findViewIcon} name="ios-game-controller-b-outline" color="#3399FF" size={22} />
                        <Text style={styles.findViewText}>游戏</Text>
                    </View>

                    <View style={styles.findView}>
                        <Icon style={styles.findViewIcon} name="ios-code" color="#55C1E7" size={22} />
                        <Text style={styles.findViewText}>小程序</Text>
                    </View>
                </View>
            </React.Fragment>
        )
    }
}

//发现组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top:25
    },
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

module.exports = FindScreen;
