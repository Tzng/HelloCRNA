import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    //onPress={() => this.props.navigation.navigate('Details')}
                    //导航栏传递参数
                    onPress={() => this.props.navigation.navigate('Details',{
                        itemId:86,
                        otherParam: '其他参数'
                    })}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {

        /* 得到这些参数，然后 */
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId','NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="传递个参数试试啊"
                    onPress={() => this.props.navigation.push('Details',{
                        itemId: Math.floor(Math.random() * 100)
                    })}
                />
                <Button
                    title="跳转到指定的组件去"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="让我们跳转到顶部去吧"
                    onPress={() => this.props.navigation.popToTop()}
                />
                <Button
                    title="回到堆里去"
                    onPress={() => this.props.navigation.pop()}
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}