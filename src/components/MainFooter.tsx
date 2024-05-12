import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {footerHeight} from '../utils/common/globalStyles';

const MainFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <Text>MainFooter</Text>
    </View>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flex: 1,
    borderTopColor: 'orange',
    borderTopWidth: 1,
    height: footerHeight,
  },
});
