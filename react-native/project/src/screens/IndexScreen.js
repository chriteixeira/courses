"use strict"

import React, {Component} from 'react';
import ReactNative, {View, StyleSheet, Text} from 'react-native';

import AppContainer from '../components/AppContainer';

class IndexScreen extends Component {

    render() {
        return (
            <AppContainer style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </AppContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

module.exports = IndexScreen;