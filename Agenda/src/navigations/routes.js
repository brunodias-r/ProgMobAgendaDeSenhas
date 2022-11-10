import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'

import Home from '../pages/home';
import CadastraSenha from '../pages/cadastrarSenha';
import AtualizaSenha from '../pages/atualizarSenha';
import ListaSenhas from '../pages/listarSenhas';

const Routes = createDrawerNavigator(
    createDrawerNavigator({
        Home,
        AtualizaSenha,
        CadastraSenha,
        ListaSenhas
    }, {
        initialRouteName: 'Home',
        // contentComponent: CustomDrawer
    })
);

export default Routes;
