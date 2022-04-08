import React from 'react';
import {Text, View} from 'react-native';
import {PrimaryButton, SecondaryButton} from '../../components/Buttons';

import {Input} from '../../components/Inputs';

export const Login = () => {
  return (
    <View>
      <Text>LOGIN</Text>

      <Input bg="backgroundSecondary" />
      <PrimaryButton title="Entrar" />
      <SecondaryButton title="Entrar com Google" />
    </View>
  );
};
