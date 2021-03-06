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
import {ProfileScreen} from '../../screens/tabs/profile/ProfileScreen';
import {HistoryScreen} from '../../screens/tabs/history/HistoryScreen';
import {RatingScreen} from '../../screens/tabs/rating/RatingScreen';

const Tab = createBottomTabNavigator();

const tabBarLabelStyle = {
  fontFamily: 'Mipgost',
  fontSize: 14,
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.initialRoute}>
      <Tab.Screen
        name={screens.tab.TAB_HOME}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarLabelStyle,
          tabBarLabel: 'Задания',
          tabBarIcon: () => <IconSvgTabHome />,
        }}
      />

      <Tab.Screen
        name={screens.tab.TAB_HISTORY}
        component={HistoryScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarLabelStyle,
          tabBarLabel: 'Истории',
          tabBarIcon: () => <IconSvgTabLove />,
        }}
      />

      <Tab.Screen
        name={screens.tab.TAB_RATING}
        component={RatingScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarLabelStyle,
          tabBarLabel: 'Рейтинг',
          tabBarIcon: () => <IconSvgTabRating />,
        }}
      />

      <Tab.Screen
        name={screens.tab.TAB_PROFILE}
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarLabelStyle,
          tabBarLabel: 'Профиль',
          tabBarIcon: () => <IconSvgTabProfile />,
        }}
      />
    </Tab.Navigator>
  );
};
