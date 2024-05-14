import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {footerHeight} from '../utils/common/globalStyles';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import BookmarkIcon from 'react-native-vector-icons/Ionicons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';
import {MainFooterTypes} from '../utils/data';

interface IProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
}

const MainFooter = ({navigation}: IProps) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <HomeIcon
          name="home"
          size={20}
          onPress={() => navigation.navigate(MainFooterTypes.HOME)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <SearchIcon
          name="search"
          size={30}
          onPress={() => navigation.navigate(MainFooterTypes.EXPLORE)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <BookmarkIcon
          name="bookmarks"
          size={18}
          onPress={() => navigation.navigate(MainFooterTypes.BOOKMARKS)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <ProfileIcon
          name="user-circle-o"
          size={20}
          onPress={() => navigation.navigate(MainFooterTypes.PROFILE)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    height: footerHeight,
  },
  iconContainer: {
    left: 0,
    right: 0,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
