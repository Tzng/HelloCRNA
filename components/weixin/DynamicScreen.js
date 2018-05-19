import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList
} from 'react-native';
import HeadScreen from '../HeadScreen';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * 动态组件，用来显示动态信息，列表的形式
 */
class DynamicScreen extends Component {

    //路由配置
    static navigationOptions = {
        title: '动态',
    }

    render(){
        return(
            <React.Fragment>
                <HeadScreen></HeadScreen>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <FlatList
                            data={[
                                {key:'1',name:'张三',text:'我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',time:'2017-01-02 10:20:33'},
                                {key:'2',name:'xiongshi1998',text:'出生无法选择，但人生可以选择',time:'2017-01-02 10:20:33'},
                                {key:'3',name:'2222',text:'过多的关注和曝光会不会对孩子的正常生活有影响？一阵风似的离开后，孩子会不会有点失落？',time:'2017-01-02 10:20:33'},
                                {key:'4',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'5',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'6',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'7',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'8',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'9',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                                {key:'10',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'}
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
        top:10
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
    }
});

module.exports = DynamicScreen;