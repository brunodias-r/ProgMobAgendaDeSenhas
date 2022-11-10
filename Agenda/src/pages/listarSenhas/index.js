import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text } from 'react-native';
import Senha from '../../components/senha';
import api from '../../services/Api';

export default class ListaSenhas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      senhas: []
    }
  }

  async componentDidMount() {
    const response = await api.get('agenda');
    this.setState({
      senhas: response.data
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.nomeSenha}> Listagem de senhas </Text>
        <FlatList
          data={this.state.senhas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Senha data={item} />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 15,
  },
  nomeSenha: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 15,
  }
})