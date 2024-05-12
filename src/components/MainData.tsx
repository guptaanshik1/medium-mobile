import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {footerHeight, headerHeight} from '../utils/common/globalStyles';

const MainData = () => {
  return (
    <View style={styles.bodyContainer}>
      <ScrollView>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
        <Text>MainData</Text>
      </ScrollView>
    </View>
  );
};

export default MainData;

const styles = StyleSheet.create({
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: headerHeight,
    paddingBottom: footerHeight,
    flex: 1,
    overflow: 'scroll',
  },
});
