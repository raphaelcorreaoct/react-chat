import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {Box} from '../../components/Box';
import {Input} from '../../components/Inputs';

import {AuthUser} from '../../hooks/useAuth';
import firestore from '@react-native-firebase/firestore';
import {UserListItem} from '../../components/UserListItem';
import auth from '@react-native-firebase/auth';

let debounce = null;

export const AddContact = () => {
  const [contactList, setContactList] = useState<AuthUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const RNFirebase = firestore().collection('Users');
  const CollectionContact = firestore().collection('Contacts');

  const renderItem = ({item}: {item: AuthUser}) => {
    return (
      <UserListItem
        user={item}
        onPress={() => {
          try {
            CollectionContact.doc(auth().currentUser?.uid).set(item);
          } catch (error) {
            console.log(error);
          }
        }}
      />
    );
  };

  const onChange = () => {
    if (search.length === 0 || search === '') return;
    if (debounce !== null) clearInterval(debounce);
    setLoading(true);
    debounce = setTimeout(() => {
      RNFirebase.where('email', '==', search)
        .get()
        .then(querySnapshot => {
          const list = [] as AuthUser[];

          // console.log(querySnapshot);

          querySnapshot.forEach(doc => {
            const {displayName, email, photoURL} = doc.data();
            list.push({
              key: doc.id,
              displayName,
              email,
              photoURL,
            });
          });

          setContactList(list);
          setLoading(false);
        })
        .catch(error => console.log('Error:', error));
    }, 1000);
  };

  useEffect(onChange, [search]);

  return (
    <Box
      bg="background"
      paddingX="big"
      alignItems="center"
      justifyContent="center"
      flex={1}>
      <Input
        bg="backgroundSecondary"
        placeholder="E-mail"
        mb="big"
        mt="giant"
        width="100%"
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />

      {loading ? (
        <Box flex={1} justifyContent="center">
          <ActivityIndicator />
        </Box>
      ) : (
        <FlatList
          style={{flex: 1, width: '100%'}}
          data={contactList}
          renderItem={renderItem}
          keyExtractor={item => item.uid}
        />
      )}
    </Box>
  );
};
