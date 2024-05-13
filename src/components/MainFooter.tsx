import {StyleSheet, View} from 'react-native';
import React from 'react';
import {footerHeight} from '../utils/common/globalStyles';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import BookmarkIcon from 'react-native-vector-icons/Ionicons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome';

const MainFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.iconContainer}>
        <HomeIcon name="home" size={20} />
      </View>
      <View style={styles.iconContainer}>
        <SearchIcon name="search" size={30} />
      </View>
      <View style={styles.iconContainer}>
        <BookmarkIcon name="bookmarks" size={18} />
      </View>
      <View style={styles.iconContainer}>
        <ProfileIcon name="user-circle-o" size={20} />
      </View>

      {/* {Object.entries(mainFooterConfig).map(([footerItem, footerObject]) => {
        return (
          <View style={styles.iconContainer} key={footerItem}>
            <Icon name={footerObject?.icon} size={30} />
          </View>
        );
      })} */}
    </View>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
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
