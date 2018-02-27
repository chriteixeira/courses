"use strict"

import React, {Component} from 'react';
import ReactNative, {View} from 'react-native';

class AppContainer extends Component {

    render() {
        return (
            <View {...this.props}>
                {this.props.children}
            </View>
        );
    }
}

module.exports = AppContainer;