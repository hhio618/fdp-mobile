import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuth} from 'core';
import {NavigationContainer} from './NavigationContainer';
import {TabNavigator} from './TabNavigator';
import { Login, AppSlider, Upload, Register } from 'screens';

const Stack = createStackNavigator();

export const Root = () => {
  const {status} = useAuth();
  useEffect(() => {
    if (status !== 'idle') {
      RNBootSplash.hide({fade: true});
    }
  }, [status]);
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
        gestureEnabled: false,
        animationTypeForReplace: status === 'signIn' ? 'push' : 'pop',
      }}>
      
      {status === 'signIn' ? (
        <>
          <Stack.Screen name="App" component={TabNavigator} />
          <Stack.Screen name="Upload" component={Upload} />
        </>
      ) : (
        <>
          <Stack.Screen name="AppSlider" component={AppSlider} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
