import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../base/Navigation';
import {Colors} from '../styles/Colors';
import {IconSvgClose} from '../assets/icons/IconSvgClose';

interface Props {
  children: React.ReactNode;
  header?: string;
  noHorizontalPadding?: boolean;
  goBack?: false | string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  orangeBack?: boolean;
  withBar?: boolean;
  withoutBack?: boolean;
  pressBack?: () => void;
}

export const Container = (props: Props) => {
  const {
    header,
    style,
    children,
    contentStyle,
    withBar,
    withoutBack = false,
    noHorizontalPadding = false,
    goBack = false,
    pressBack,
  } = props;
  const safeAreaTop = useSafeAreaInsets().top;
  const safeAreaBottom = useSafeAreaInsets().bottom;

  const handleNavigateToScreen = (screen?: string | false) => {
    screen ? Navigation.navigate(screen) : Navigation.pop();
  };

  return (
    <View style={[styles.container, style]}>
      {!!header && (
        <View style={[styles.header, {paddingTop: safeAreaTop + 16}]}>
          {!withoutBack && (
            <TouchableOpacity
              onPress={() =>
                pressBack ? pressBack() : handleNavigateToScreen(goBack)
              }
              style={styles.iconContainer}>
              <IconSvgClose size={28} />
            </TouchableOpacity>
          )}
          <Text style={styles.textStyle}>{header}</Text>
        </View>
      )}
      <View
        style={[
          styles.content,
          {
            paddingTop: !header ? safeAreaTop : 16,
            paddingBottom: withBar ? 8 : safeAreaBottom,
          },
          contentStyle,
          noHorizontalPadding && {paddingHorizontal: 0},
        ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1, padding: 16},
  header: {
    borderBottomColor: Colors.shadow,
    borderBottomWidth: 1,
    paddingVertical: 6,
    flexDirection: 'row',
    zIndex: 10,
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 16,
    fontFamily: 'Mipgost',
  },
});
