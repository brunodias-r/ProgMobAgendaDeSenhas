import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Armazene aqui as suas senhas.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
    },

});
