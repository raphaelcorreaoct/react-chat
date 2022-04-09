import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Alert, Image} from 'react-native';
import {Box} from '../../components/Box';
import {
  LinkButton,
  PrimaryButton,
  SecondaryButton,
} from '../../components/Buttons';

import auth from '@react-native-firebase/auth';
import {Input} from '../../components/Inputs';

export const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [pssw, setPssw] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    ß;
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, pssw);

      setPssw('');
      setEmail('');
    } catch (e) {
      console.error('Error::', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocinWithGoogle = () => {};

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
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />

      <Input
        bg="backgroundSecondary"
        placeholder="Senha"
        mb="big"
        width="100%"
        value={pssw}
        onChangeText={setPssw}
        autoCapitalize="none"
        secureTextEntry
      />

      <Box
        mb="big"
        width="100%"
        flexDirection="row"
        justifyContent="space-between">
        <LinkButton
          title="Equeci minha senha"
          onPress={() => navigation.navigate('resetPssw')}
        />
        <LinkButton
          title="Cadastre-se"
          onPress={() => navigation.navigate('register')}
        />
      </Box>

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <PrimaryButton
          title="Entrar"
          mb="big"
          width="100%"
          onPress={handleLogin}
        />
      )}
      <SecondaryButton
        title="Entrar com Google"
        mb="big"
        width="100%"
        onPress={handleLocinWithGoogle}
      />
    </Box>
  );
};
