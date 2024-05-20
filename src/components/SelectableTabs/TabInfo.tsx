import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface IProps {
  tabData: string;
}

const TabInfo = ({tabData}: IProps) => {
  return (
    <View style={styles.tabView}>
      <Text style={styles.tabText}>{tabData}</Text>
    </View>
  );
};

export default TabInfo;

const styles = StyleSheet.create({
  tabView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tabText: {
    color: '#000000',
    fontSize: 38,
  },
});
