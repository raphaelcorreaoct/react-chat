import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {LoginStack} from './loginStack';
import {AppStack} from './appStack';

import {useAuth} from '../hooks/useAuth';

export default function Routes() {
  const user = useAuth();

  return (
    <NavigationContainer>
      {!user && <LoginStack />}
      {user && <AppStack />}
    </NavigationContainer>
  );
}
