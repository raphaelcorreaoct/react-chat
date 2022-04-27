import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

import {useTheme} from 'styled-components';

import {UserListItem} from './UserListItem';
import {AuthUser} from '../hooks/useAuth';

export const UserList = ({users}: {users: AuthUser[]}) => {
  const theme = useTheme();

  console.log(users);
  return (
    <FlatList
      style={{flex: 1, backgroundColor: theme.colors.background}}
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
      keyExtractor={item => item?.uid}
    />
  );
};
