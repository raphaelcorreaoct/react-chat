import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './src/components/theme/lightTheme';
import Routes from './src/route/appRoute';
import 'react-native-gesture-handler';
import {AuthProvider} from './src/hooks/useAuth';
import {MenuProvider} from 'react-native-popup-menu';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <MenuProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </MenuProvider>
    </ThemeProvider>
  );
}
