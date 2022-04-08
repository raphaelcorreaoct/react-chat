import React from 'react';
import {Image} from 'react-native';
import {Box} from '../../components/Box';
import {PrimaryButton, SecondaryButton} from '../../components/Buttons';
import {Input} from '../../components/Inputs';

export const Register = () => {
  return (
    <Box
      bg="background"
      paddingX="big"
      alignItems="center"
      justifyContent="center"
      flex={1}>
      <Image source={require('../../assets/images/logo.png')} />

      <Input
        bg="backgroundSecondary"
        placeholder="E-mail"
        mb="big"
        mt="giant"
        width="100%"
      />

      <Input
        bg="backgroundSecondary"
        placeholder="Senha"
        mb="big"
        width="100%"
      />
      <Input
        bg="backgroundSecondary"
        placeholder="E-mail"
        mb="big"
        mt="giant"
        width="100%"
      />

      <Input
        bg="backgroundSecondary"
        placeholder="Senha"
        mb="big"
        width="100%"
      />
      <PrimaryButton title="Entrar" mb="big" width="100%" />
      <SecondaryButton title="Entrar com Google" mb="big" width="100%" />
    </Box>
  );
};
