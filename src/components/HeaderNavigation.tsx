import React from 'react';
import {Box} from './Box';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Image} from 'react-native';
import {useAuth} from '../hooks/useAuth';
import {Txt} from './Text';

import auth from '@react-native-firebase/auth';
import {HeaderMenu} from './HeaderMenu';

export const HeaderNavigation = () => {
  const user = useAuth();

  const avatar = user?.photoURL
    ? {uri: user?.photoURL}
    : require('../assets/images/user.png');

  return (
    <Box
      pt={getStatusBarHeight() + 15}
      pb="middle"
      bg="backgroundSecondary"
      paddingX="big"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      zIndex={1}>
      <Box flex={1} flexDirection="row" alignItems="center">
        <Image
          source={avatar}
          style={{width: 40, height: 40, borderRadius: 40}}
        />
        <Txt pl="middle">
          Olá {user?.displayName || user?.email?.split('@')[0] + '...'}
        </Txt>
      </Box>

      <Box maxWidth={70} flex={1}>
        <HeaderMenu />
      </Box>
    </Box>
  );
};
