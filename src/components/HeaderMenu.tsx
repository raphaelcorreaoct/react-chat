import React from 'react';
import {View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export const HeaderMenu = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Menu>
        <MenuTrigger text=":" />
        <MenuOptions>
          <MenuOption
            onSelect={() => console.log(`Save`)}
            text="Editar Perfil"
          />
          <MenuOption
            onSelect={() => navigation.navigate('AddContact')}
            text="Adicionar contato"
          />
          <MenuOption onSelect={() => auth().signOut()} text="Sair" />
        </MenuOptions>
      </Menu>
    </View>
  );
};
