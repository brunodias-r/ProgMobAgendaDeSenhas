import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class AtualizaSenha extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nomeSenha}> Atualização de senha </Text>

                <Text style={styles.userpass}>Descrição</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.userpass}>Usuário</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.userpass}>Senha</Text>
                <TextInput
                    style={styles.input}
                />

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontWeight: 'bold', justifyContent: 'center' }}>ATUALIZAR</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15
    },
    input: {
        height: 40,
        borderWidth: 1,
        backgroundColor: 'white',
        width: 300,
        borderRadius: 25,
    },
    userpass: {
        color: 'white',
        fontSize: 18,
        marginTop: 10
    },
    nomeSenha: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btn:{
        marginTop: 30,
        backgroundColor: '#0066cc',
        borderColor: '#ffffff',
        width: 300,
        borderWidth: 1,
        borderRadius: 25,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
