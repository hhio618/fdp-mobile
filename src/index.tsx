import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'ui';
import FlashMessage from 'react-native-flash-message';
import {RootNavigator} from 'navigation';
import {hydrateAuth, setI18nConfig} from 'core';
import APIProvider from 'api/APIProvider';
import Toast from 'react-native-toast-message';

setI18nConfig();
hydrateAuth();

const App = () => {
  return (
    <APIProvider>
      <ThemeProvider>
        <RootNavigator />
        <FlashMessage position="top" />
        <Toast />
      </ThemeProvider>
    </APIProvider>
  );
};

export default App;
