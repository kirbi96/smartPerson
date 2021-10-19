import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconSvgTabHome} from '../../../../assets/icons/tab/IconSvgTabHome';
import {Colors} from '../../../../styles/Colors';
import {TaskHelper} from '../../../../helpers/TaskHelper';
import {AgEnum, Text} from '../../../../components/ui/Text';

interface ITaskLevel {
  tasks: any;
  level: number;
  color: string;
}

export const TaskLevel = (props: ITaskLevel) => {
  const {tasks, level, color} = props;

  return (
    <View style={styles.container}>
      {[...Array(19)].map((_, index) => (
        <View
          style={[styles.taskItem, {width: TaskHelper.firstLevel(index)}]}
          key={index}>
          <View style={[styles.taskBorder, {borderColor: Colors.gray300}]}>
            <TouchableOpacity
              style={[styles.taskContainer, {backgroundColor: color}]}
              onPress={() => {}}>
              <Image
                style={{width: 46, height: 46}}
                source={require('../../../../assets/images/car.png')}
              />
              <View style={styles.crown}>
                <Image
                  style={{width: 20, height: 26}}
                  source={require('../../../../assets/images/crown.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={styles.bottomContainer}>
        <Image
          style={styles.endIcon}
          source={require('../../../../assets/images/tower.png')}
        />

        <Text Ag={AgEnum.Body}>Уровень {level}</Text>
        <Image
          style={styles.endIcon}
          source={require('../../../../assets/images/tower.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  crown: {
    position: 'absolute',
    top: 50,
    right: -10,
  },
  taskItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  taskBorder: {
    width: 90,
    height: 90,
    backgroundColor: Colors.transparent,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
  },
  taskContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  endIcon: {
    width: 80,
    height: 80,
  },
  bottomContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
