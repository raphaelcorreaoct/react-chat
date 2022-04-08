import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/home/Home';
import {Chat} from '../screens/chat/Chat';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="chat" component={Chat} />
    </Navigator>
  );
};
