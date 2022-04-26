import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../screens/login/login';
import {Register} from '../screens/register/register';
import {ResetPssw} from '../screens/resetPssw/resetPssw';

const {Navigator, Screen} = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Navigator>
      <Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="register" component={Register} />
      <Screen name="resetPssw" component={ResetPssw} />
    </Navigator>
  );
};
