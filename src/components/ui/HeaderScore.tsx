import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AgEnum, Text} from './Text';
import {IconSvgMedal} from '../../assets/icons/IconSvgMedal';
import {Colors} from '../../styles/Colors';

export const HeaderScore = () => {
  return (
    <View style={styles.container}>
      <IconSvgMedal />
      <Text Ag={AgEnum.Body}>Счет: 12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.shadow,
    borderBottomWidth: 1,
  },
});
