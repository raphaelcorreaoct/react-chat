import React, {useRef} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {LoginStack} from './loginStack';
import {AppStack} from './appStack';

export default function Routes() {
  let isLoggedIn = false;
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      {!isLoggedIn && <LoginStack />}
      {isLoggedIn && <AppStack />}
    </NavigationContainer>
  );
}
