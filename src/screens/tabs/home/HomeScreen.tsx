import React from 'react';
import {ScrollView} from 'react-native';
import {HeaderScore} from '../../../components/ui/HeaderScore';
import {TaskLevel} from './components/TaskLevel';
import {Colors} from '../../../styles/Colors';

export const HomeScreen = () => {
  return (
    <>
      <HeaderScore />
      <ScrollView>
        <TaskLevel tasks={[]} level={1} color={Colors.leaf} />
        <TaskLevel tasks={[]} level={2} color={Colors.blue} />
        <TaskLevel tasks={[]} level={3} color={Colors.yellow} />
        <TaskLevel tasks={[]} level={4} color={Colors.red} />
      </ScrollView>
    </>
  );
};
