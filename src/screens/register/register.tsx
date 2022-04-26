import React, {useState} from 'react';
import {ActivityIndicator, Alert, Image} from 'react-native';
import {Box} from '../../components/Box';
import {PrimaryButton} from '../../components/Buttons';
import {Input} from '../../components/Inputs';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [pssw, setPssw] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const RNFirebase = firestore().collection('Users');

  const handleNewAccount = async () => {
    setIsLoading(true);
    try {
      const {user} = await auth().createUserWithEmailAndPassword(email, pssw);

      RNFirebase.doc(user.uid).set({
        email: user.email,
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        uid: user.uid,
      });

      Alert.alert('Conta', 'Cadastrado com sucesso!');
      setPssw('');
      setEmail('');
    } catch (e) {
      console.error('Error::', e);
    } finally {
      setIsLoading(false);
    }
  };

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

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <PrimaryButton
          title="Cadastrar"
          mb="big"
          width="100%"
          onPress={handleNewAccount}
        />
      )}
    </Box>
  );
};
