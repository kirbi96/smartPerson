import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AgEnum, Text} from '../../../components/ui/Text';

export const RatingScreen = () => {
  return (
    <View style={styles.container}>
      <Text Ag={AgEnum.H2}>Раздел рейтинг находится в разработке</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
