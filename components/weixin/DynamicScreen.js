import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DynamicDetailScreen from './DynamicDetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * 动态组件，用来显示动态信息，列表的形式
 */
class DynamicScreen extends Component {

    //路由配置
    static navigationOptions = {
        title: '动态',
        headerStyle:{
            backgroundColor:'#242529',
            height: 45
        },
        headerTintColor:'#fff',
        headerRight:(<Icon name="md-add" color="#fff" size={20} style={{marginRight:20}}/>),
        headerTitle:"动态"
    }

    render(){
        return(
            <React.Fragment>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <FlatList
                            data={[
                                {key:'1',name:'张三',text:'我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',time:'2017-01-02 10:20:33'},
                                {key:'2',name:'李四',text:'出生无法选择，但人生可以选择',time:'2017-01-02 10:20:33'},
                                {key:'3',name:'王五 ',text:'过多的关注和曝光会不会对孩子的正常生活有影响？一阵风似的离开后，孩子会不会有点失落？',time:'2017-01-02 10:20:33'},
                                {key:'4',name:'测',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'5',name:'我',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'6',name:'上上上',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'7',name:'学习',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'8',name:'323',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'9',name:'发',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'10',name:'啊',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'}
                            ]}
                            renderItem={({item}) => (
                                <View style={styles.item}>
                                    <View style={{flex:1}}>
                                        <Text><Icon name="ios-chatboxes-outline" color="#000" size={30} /></Text>
                                    </View>
                                    <View style={{flex:9}}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.text}>{item.text}</Text>
                                        <Text style={styles.time}>{item.time}</Text>
                                        <Button title="详情" onPress={()=> {console.log(this.props.navigation);this.props.navigation.push('dynamicdetail',{name:item.name})}}></Button>
                                        {/*<Button title="详情" onPress={() => this.props.navigation.navigate('dynamicDetail',{name:'6666'})}></Button>*/}
                                    </View>
                                </View>
                            )}
                        />
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
    //header样式
    headerBar:{
        backgroundColor:'#242529',
        height: 45
    }
});

// 如果你想导航到一个页面，就按照下面的方式创建它
const DynamicStackScreen = createStackNavigator(
    //第一个参数RouteConfigs
    {
        dynamic: {
            screen: DynamicScreen,
        },
        // DynamicDetailScreen 就是一个将要显示在屏幕上的 React 组件
        dynamicdetail: {
            // 可选的：当在 Web 应用程序中进行深度链接或使用 react-navigation 时，才会用到 path
            path: 'dynamicdetail/:name',
            // 当 DynamicDetailScreen 被 StackNavigator 加载的时候，它会被赋予一个 navigation 属性
            screen: DynamicDetailScreen,
            // 可选的：可以在这里重写 navigationOptions
/*            navigationOptions: ({navigation}) => ({
                title: `页面~ ${navigation.state.params.name}`,
            })*/
        },
        //在这后面还能添加其他的路由
    },
    //第二个参数 StackNavigatorConfig
    {
        //我如果设置头部隐藏，那么会把所有组件的头部都隐藏了~那么就得每一个组件都进行头部设置了~
        //headerMode: 'none'
    }
)

module.exports = DynamicStackScreen;