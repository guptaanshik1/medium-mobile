import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {headerHeight} from '../utils/common/globalStyles';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  Layout,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {ParamListBase, RouteProp} from '@react-navigation/native';

interface IProps {
  layout: Layout;
  options: BottomTabNavigationOptions;
  route: RouteProp<ParamListBase>;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
}

const MainHeader = ({route}: IProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text>{route?.name}</Text>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    height: headerHeight,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    left: 0,
    right: 0,
    borderColor: '#000000',
    borderWidth: 1,
  },
});
