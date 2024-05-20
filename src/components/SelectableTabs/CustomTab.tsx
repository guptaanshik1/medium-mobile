import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  NavigationState,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import {useTabStore} from '../../pages/HomeListing/tabStore';

interface Route {
  key: string;
  title: string;
}

type TProps = SceneRendererProps & {navigationState: NavigationState<Route>};

const CustomTab = (props: TProps) => {
  const {setSelectedHomeTab} = useTabStore();

  const handleTabPress = (route: Route) => {
    console.log({route});
    setSelectedHomeTab(route);
  };

  return (
    <TabBar
      {...props}
      renderLabel={({route}) => (
        <Text style={styles.label}>{route?.title}</Text>
      )}
      style={styles.tabBar}
      scrollEnabled={true}
      indicatorStyle={styles.indicator}
      onTabPress={({route}) => handleTabPress(route)}
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
