import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './src/components/theme/lightTheme';
import Routes from './src/route/appRoute';
import 'react-native-gesture-handler';
import {AuthProvider} from './src/hooks/useAuth';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
