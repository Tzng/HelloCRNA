import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

class SettingsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

module.exports = SettingsScreen;