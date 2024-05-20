import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  NavigationState,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';

interface Route {
  key: string;
  title: string;
}

type TProps = SceneRendererProps & {navigationState: NavigationState<Route>};

const CustomTab = (props: TProps) => {
  return (
    <TabBar
      {...props}
      renderLabel={({route}) => (
        <Text style={styles.label}>{route?.title}</Text>
      )}
      style={styles.tabBar}
      scrollEnabled={true}
      indicatorStyle={styles.indicator}
    />
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    maxWidth: 300,
    paddingRight: 40,
  },
  indicator: {
    backgroundColor: 'grey',
  },
});
