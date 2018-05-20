import React,{ Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//动态组件详情组件
class DynamicDetailScreen extends React.Component {
    static navigationOptions = ({navigation}) => {

        const { params = {} } = navigation.state;

        let headerRight = () => (
            <Button
                title="Save"
                onPress={params.handleSave?params.handleSave:null}
            />
        );

        let num = 10;
        if(params.isActive){
            headerRight = () => (
                <ActivityIndicator/>
            )
        };

        console.log(navigation);
        return ({
            headerStyle:styles.headerBar,
            headerTintColor:'#fff',
            title: navigation.state.params.name,
            headerRight: headerRight(),
        })
    }

    //初始化的时候进行状态赋值
    componentDidMount(){
        this.props.navigation.setParams({handleSave: this._handleSave});
    }

    //状态修改，这里的setTimeout卸载的时候还要清楚吗
    _handleSave = () => {
        this.props.navigation.setParams({isActive: true});
        //设置显示时间
        setTimeout(()=>{
            this.props.navigation.setParams({isActive: false});
        },5000);
    }

    componentWillUnmount(){
        clearTimeout(this._handleSave);
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>5555555555555555</Text>
            </View>
        );
    }
}

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

module.exports = DynamicDetailScreen;