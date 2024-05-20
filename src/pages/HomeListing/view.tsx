import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useTabStore} from './tabStore';

const HomeListing = () => {
  const {selectedHomeTab} = useTabStore();

  useEffect(() => {
    console.log({selectedTabInHome: selectedHomeTab});
  }, [selectedHomeTab]);

  return (
    <View>
      <Text>{selectedHomeTab?.title}</Text>
    </View>
  );
};

export default HomeListing;

const styles = StyleSheet.create({});
