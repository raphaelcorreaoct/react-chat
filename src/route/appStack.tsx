import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/home/Home';
import {Chat} from '../screens/chat/Chat';

import {View} from 'react-native';
import {HeaderNavigation} from '../components/HeaderNavigation';
import {AddContact} from '../screens/AddContact/AddContact';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: true,
        header: props => <HeaderNavigation {...props} />,
      }}>
      <Screen name="home" component={Home} />
      <Screen name="chat" component={Chat} />
      <Screen name="AddContact" component={AddContact} />
    </Navigator>
  );
};
