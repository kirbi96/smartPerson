import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../consts/screens';
import {Colors} from '../../styles/Colors';
import Navigation from '../../base/Navigation';
import {IconSvgTabLove} from '../../assets/icons/tab/IconSvgTabLove';
import {IconSvgTabHome} from '../../assets/icons/tab/IconSvgTabHome';
import {IconSvgTabProfile} from '../../assets/icons/tab/IconSvgTabProfile';
import {HomeScreen} from '../../screens/tabs/home/HomeScreen';
import {IconSvgTabRating} from '../../assets/icons/tab/IconSvgTabRating';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.initialRoute}>
      <Tab.Screen
        name={screens.tab.TAB_NEWS}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarLabel: 'Задания',
          tabBarIcon: ({focused}) => <IconSvgTabHome />,
        }}
      />

      <Tab.Screen
        name={screens.tab.TAB_SEARCH}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarLabel: 'Истории',
          tabBarIcon: ({focused}) => <IconSvgTabLove />,
        }}
      />

      <Tab.Screen
        name={screens.tab.TAB_HISTORY}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarLabel: 'Рейтинг',
          tabBarIcon: ({focused}) => <IconSvgTabRating />,
        }}
      />

      <Tab.Screen
        name={screens.tab.TAB_PROFILE}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarLabel: 'Профиль',
          tabBarIcon: ({focused}) => <IconSvgTabProfile />,
        }}
      />
    </Tab.Navigator>
  );
};