import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

interface IProps {
  header?: ReactNode;
  selectables?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const HomeCommonLayout = ({header, footer, children, selectables}: IProps) => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.header}>{header}</View>
      {selectables && <View>{selectables}</View>}
      {children}
      <View style={styles.footer}>{footer}</View>
    </SafeAreaView>
  );
};

export default HomeCommonLayout;

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    margin: 0,
    borderColor: 'red',
    borderWidth: 1,
    height: 'auto',
    position: 'relative',
  },
  header: {
    top: 0,
    left: 0,
    padding: 10,
    position: 'absolute',
  },
  selectables: {top: 0, left: 0, position: 'absolute'},
  footer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    padding: 10,
  },
});
