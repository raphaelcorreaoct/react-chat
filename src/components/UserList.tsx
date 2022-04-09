import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

import {useTheme} from 'styled-components';

import {UserListItem} from './UserListItem';
import {AuthUser} from '../hooks/useAuth';

export const UserList = ({users}: {users: AuthUser[]}) => {
  const theme = useTheme();
  return (
    <FlatList
      style={{flex: 1, backgroundColor: theme.colors.background}}
      data={users}
      keyExtractor={item => item.providerId}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};
