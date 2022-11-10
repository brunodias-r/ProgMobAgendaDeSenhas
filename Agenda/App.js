/*********************** USANDO MÉTODO STATES ************************/

// import React, { Component } from 'react';
// import { SafeAreaView, StyleSheet, FlatList, Text } from 'react-native';
// import Senha from './src/pages/listarSenhas/index.js';
// import api from './src/services/Api';

// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       senhas: []
//     }
//   }

//   async componentDidMount() {
//     const response = await api.get('agenda');
//     this.setState({
//       senhas: response.data
//     })
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.nomeSenha}> Senhas: </Text>
//         <FlatList
//           data={this.state.senhas}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => <Senha data={item} />}
//         />
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1e1e1e',
//   },
//   nomeSenha:{
//     fontWeight: 'bold',
//         color: 'white',
//         fontSize: 18,
//         justifyContent: 'center',
//         alignSelf: 'center'
//   }
// })

/*********************** USANDO MÉTODO FETCH ************************/

// import React, { Component, useEffect, useState } from 'react';
// import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
// import Senha from './src/pages/senha/index.js';
// import api from './src/services/Api.js';

// export default function App() {

//   const [senha, setSenha] = useState([]);
//   const [carregando, setCarregando] = useState(true);

//   useEffect(() => {
//     fetch(api)
//       .then((response) => response.json())
//       .then((json) => setSenha(json))
//       .catch((error) => console.error(error))
//       .finally(() => setCarregando(false))
//   }, [])

//   return (
//     <View style={styles.container}>
//       {carregando ? (<Text>Carregando...</Text>) : (
//         senha.map((agenda) => {
//           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{agenda.descricao}</Text>
//             <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{agenda.username}</Text>
//             <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{agenda.password}</Text>
//           </View>
//         })
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1e1e1e',
//   }
// })

/*********************** USANDO MÉTODO FETCH 2 ************************/
// import React, { Component, useEffect, useState } from 'react';
// import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
// import Senha from './src/pages/senha/index.js';
// import api from './src/services/Api.js';

// export default class App extends Component {

//   static navigationOptions = {
//     drawerLabel: "Home",

//     drawerIcon: ({ focused, tintColor }) => (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{agenda.descricao}</Text>
//         <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{agenda.username}</Text>
//         <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{agenda.password}</Text>
//       </View>
//     )
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     }
//   }

//   loadSenhas = () => {
//     fetch(api)
//       .then((response) => response.json())
//       .then(response => {
//         this.setState({
//           data: response.
//         })
//       })
//       .catch((error) => console.error(error))
//       .finally(() => setCarregando(false))
//   }

//   render() {
//     return (
//       <View style={styles.container} >
//       </View >
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1e1e1e',
//   }
// })

/*********************** USANDO COMPONENTES ROTEADOS ************************/

import React from 'react';
import ListaSenhas from './src/pages/listarSenhas/index.js';
import AtualizaSenha from './src/pages/atualizarSenha/index';
import CadastraSenha from './src/pages/cadastrarSenha/index';
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import Home from './src/pages/home/index.js';
import DrawerNavigation from './src/navigations/routes.js';
import Routes from './src/navigations/routes.js';

export default function App(){

    return (
      // // <ListaSenhas></ListaSenhas>
      // // <AtualizaSenha></AtualizaSenha>
      // <View style={styles.containerMain}>
      //   {/* <CadastraSenha></CadastraSenha> */}
      //   {/* <AtualizaSenha></AtualizaSenha> */}
      //   {/* <ListaSenhas></ListaSenhas> */}

      // </View>
      <Routes></Routes>
    );

}

const styles = StyleSheet.create({
  containerMain:{
    backgroundColor: '#1e1e1e',
  }
})