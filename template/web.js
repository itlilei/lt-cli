import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, } from 'react-native';
import {
    JDText,
} from '@jdreact/jdreact-core-lib';
class $ProgramName extends Component {
    render() {
        return (
            <View style={styles.container}>
                <JDText>Hello, $ProgramName</JDText>
            </View>
        );
    }
}
AppRegistry.registerComponent('$ProgramName', () => $ProgramName);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
let app = document.getElementById('m_common_content');
if (!app) {
    app = document.createElement('div');
    document.body.appendChild(app);
}
AppRegistry.runApplication('$ProgramName', {
    rootTag: app
});