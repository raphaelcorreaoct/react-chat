import React from 'react';
import {Box, TouchableBox} from './Box';
import {Txt} from './Text';

import {Image} from 'react-native';
import {AuthUser} from '../hooks/useAuth';
import {useNavigation} from '@react-navigation/native';

export const UserListItem = ({user}: {user: AuthUser}) => {
  const navigation = useNavigation();

  const avatar = user?.photoURL
    ? {uri: user?.photoURL}
    : require('../assets/images/user.png');
  return (
    <TouchableBox
      padding="middle"
      borderBottomWidth={1}
      flexDirection="row"
      alignItems="center"
      onPress={() => navigation.navigate('chat', {userId: user?.uid})}>
      <Image source={avatar} style={{width: 40, height: 40}} />
      <Box ml="small">
        <Txt>{user?.displayName || user?.email}</Txt>
        <Txt fontSize="small"> E aee cara tudo bem...</Txt>
      </Box>
    </TouchableBox>
  );
};
