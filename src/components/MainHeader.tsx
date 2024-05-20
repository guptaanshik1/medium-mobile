import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalPadding, headerHeight} from '../utils/common/globalStyles';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  Layout,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import NotificationIcon from 'react-native-vector-icons/Ionicons';
import SelectableTabView from './SelectableTabs/SelectableTabView';

interface IProps {
  layout: Layout;
  options: BottomTabNavigationOptions;
  route: RouteProp<ParamListBase>;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
}

const MainHeader = ({route}: IProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{route?.name}</Text>
        <NotificationIcon name="notifications-outline" size={24} />
      </View>
      <SelectableTabView />
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
    borderBottomWidth: 1,
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: globalPadding,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
  },
});
