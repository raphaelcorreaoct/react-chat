import React, {useState} from 'react';
import {Box} from '../../components/Box';
import {AuthUser} from '../../hooks/useAuth';

export const Profile = () => {
  const [] = useState<AuthUser>({
    displayName: '',
  } as AuthUser);

  return <Box></Box>;
};
