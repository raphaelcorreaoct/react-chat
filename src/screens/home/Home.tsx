import React from 'react';
import {useWindowDimensions} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useTheme} from 'styled-components';

import {Contacts} from '../contact/contact';
import {Talks} from '../talks/Talks';

const renderScene = SceneMap({
  first: Talks,
  second: Contacts,
});

const renderTabBar = props => {
  const theme = useTheme();
  return (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: theme.colors.brandPrimary}}
      style={{
        backgroundColor: theme.colors.backgroundSecondary,
      }}
      inactiveColor={theme.colors.onBackgroundSecondary}
      activeColor={theme.colors.brandPrimary}
    />
  );
};

export const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Conversas'},
    {key: 'second', title: 'Contatos'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};
