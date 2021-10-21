import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../consts/screens';

import {Tabs} from '../tabs/Tabs';
import {TaskInScreen} from '../../screens/TaskInScreen';

const Stack = createStackNavigator();

export const TabsStack = (
  <>
    <Stack.Screen name={screens.MAIN_APP} component={Tabs} />
    <Stack.Screen name={screens.TASK_IN} component={TaskInScreen} />
  </>
);
