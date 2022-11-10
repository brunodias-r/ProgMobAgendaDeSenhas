import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Senha extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.userpass}>Descrição.: {this.props.data.descricao}</Text>
                <Text style={styles.userpass}>Usuário.....: {this.props.data.username}</Text>
                <Text style={styles.userpass}>Senha........: {this.props.data.password}</Text>
                <Text style={styles.userpass}>Data...........: {this.props.data.data}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#1e1e1e',
        paddingBottom: 15,

    },
    userpass:{
        color: 'white',
        fontSize: 18,
    }
});
