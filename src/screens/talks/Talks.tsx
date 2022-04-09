import React, {useEffect, useState} from 'react';

import {AuthUser} from '../../hooks/useAuth';
import {ActivityIndicator} from 'react-native';
import {UserList} from '../../components/UserList';
import {Box} from '../../components/Box';
import {Txt} from '../../components/Text';

export const Talks = () => {
  const [chatList, setUserList] = useState<AuthUser[]>([0]);
  const [isLoadin, setLoading] = useState(true);
  const [error, setErro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
