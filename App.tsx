import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './src/components/theme/lightTheme';
import Routes from './src/route/appRoute';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes />
    </ThemeProvider>
  );
}
