import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TabsStack} from './stacks/TabsStack';

import Navigation from '../base/Navigation';
import {Colors} from '../styles/Colors';

export type RootStackParamList = {};

const Stack = createStackNavigator<RootStackParamList>();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const Navigator = () => {
  return (
    <NavigationContainer theme={AppTheme} ref={Navigation.navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {TabsStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
