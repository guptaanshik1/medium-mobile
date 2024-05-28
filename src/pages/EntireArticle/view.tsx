import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {THomeNavigationParamList} from '../../utils/data';

type TEntireArticleProps = NativeStackScreenProps<THomeNavigationParamList>;

const EntireArticle = ({navigation, route}: TEntireArticleProps) => {
  console.log({route, navigation});
  return (
    <View>
      <Text>{route?.path}</Text>
    </View>
  );
};

export default EntireArticle;

const styles = StyleSheet.create({});
