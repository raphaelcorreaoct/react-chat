import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../screens/login/login';
import {Register} from '../screens/register/reagister';
import {ResetPssw} from '../screens/resetPssw/resetPssw';

const {Navigator, Screen} = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Navigator>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="restPssw" component={ResetPssw} />
    </Navigator>
  );
};
