import {MainFooterTypes, TBottomNavigatonParamList} from '../utils/data';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeListing from '../pages/HomeListing/view';
import Explore from '../pages/Explore/view';
import Bookmarks from '../pages/Bookmarks/view';
import Profile from '../pages/Profile/view';
import MainFooter from '../components/MainFooter';

export const Tab = createBottomTabNavigator<TBottomNavigatonParamList>();

const BottomStackNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MainFooter {...props} />}>
      <Tab.Screen name={MainFooterTypes.HOME} component={HomeListing} />
      <Tab.Screen name={MainFooterTypes.EXPLORE} component={Explore} />
      <Tab.Screen name={MainFooterTypes.BOOKMARKS} component={Bookmarks} />
      <Tab.Screen name={MainFooterTypes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomStackNavigator;
