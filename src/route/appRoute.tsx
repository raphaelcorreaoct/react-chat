import React, {useEffect, useRef, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {LoginStack} from './loginStack';
import {AppStack} from './appStack';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {!user && <LoginStack />}
      {user && <AppStack />}
    </NavigationContainer>
  );
}
