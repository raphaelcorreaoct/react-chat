import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from '../../components/Box';
import {Txt} from '../../components/Text';
import {UserList} from '../../components/UserList';
import {AuthUser} from '../../hooks/useAuth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const Contacts = () => {
  const [chatList, setUserList] = useState<AuthUser[]>([]);
  const [isLoadin, setLoading] = useState(true);
  const [error, setErro] = useState(false);

  const CollectionContact = firestore().collection('Contacts');

  useEffect(() => {
    setLoading(true);

    const subscriber = CollectionContact.doc(
      auth().currentUser?.uid,
    ).onSnapshot(documentSnapshot => {
      const data = documentSnapshot.data();
      setUserList([data] as AuthUser[]);
      setLoading(false);
    });

    return () => subscriber();

    // (async () => {
    //   // const update = {
    //   //   displayName: 'Raphael Correa',
    //   //   photoURL: 'https://picsum.photos/200',
    //   // };
    //   // await auth().currentUser?.updateProfile(update);
    // })();
  }, []);

  if (isLoadin)
    return (
      <Box flex={1} justifyContent="center" bg="background">
        <ActivityIndicator size="large" />
      </Box>
    );

  if (!isLoadin && error)
    return (
      <Box flex={1} justifyContent="center" alignItems="center" bg="background">
        <Txt fontSize="big" fontWeight="bold">
          Ocorreu um erro
        </Txt>
        <Txt>Tente novamente mais tarde.</Txt>
      </Box>
    );

  return <UserList users={chatList} />;
};
