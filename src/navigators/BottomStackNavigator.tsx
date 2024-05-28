import {MainFooterTypes, TBottomNavigatonParamList} from '../utils/data';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeListing from '../pages/HomeListing/view';
import Explore from '../pages/Explore/view';
import Bookmarks from '../pages/Bookmarks/view';
import Profile from '../pages/Profile/view';
import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';
import HomeScreen from './HomeScreen';

export const Tab = createBottomTabNavigator<TBottomNavigatonParamList>();

const BottomStackNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MainFooter {...props} />}>
      <Tab.Screen
        name={MainFooterTypes.HOME}
        component={HomeScreen}
        options={{header: props => <MainHeader {...props} />}}
      />
      <Tab.Screen
        name={MainFooterTypes.EXPLORE}
        component={Explore}
        options={{header: props => <MainHeader {...props} />}}
      />
      <Tab.Screen
        name={MainFooterTypes.BOOKMARKS}
        component={Bookmarks}
        options={{header: props => <MainHeader {...props} />}}
      />
      <Tab.Screen
        name={MainFooterTypes.PROFILE}
        component={Profile}
        options={{header: props => <MainHeader {...props} />}}
      />
    </Tab.Navigator>
  );
};

export default BottomStackNavigator;
