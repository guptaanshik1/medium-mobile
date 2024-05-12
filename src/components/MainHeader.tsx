import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {headerHeight} from '../utils/common/globalStyles';

const MainHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>MainHeader</Text>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flex: 1,
    height: headerHeight,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: 100,
  },
});
