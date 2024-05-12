import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {footerHeight, headerHeight} from '../utils/common/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MainData = () => {
  return (
    <View style={styles.bodyContainer}>
      <ScrollView>
        <View style={{display: 'flex', flex: 1, gap: 10, flexDirection: 'row'}}>
          <Text>Main Data</Text>
          <Icon name="facebook" size={30} />
        </View>
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
