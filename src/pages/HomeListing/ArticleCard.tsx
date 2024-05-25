import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IArticleListResponse} from '../../utils/data';
import ProfileIcon from 'react-native-vector-icons/FontAwesome';
import DotIcon from 'react-native-vector-icons/Entypo';
import MenuIcon from 'react-native-vector-icons/Entypo';
import BlockIcon from 'react-native-vector-icons/Octicons';
import AddBookmark from 'react-native-vector-icons/MaterialIcons';
import {globalPadding} from '../../utils/common/globalStyles';

interface IProps {
  articleItem: IArticleListResponse;
}

const ArticleCard = ({articleItem}: IProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.articleText}>
        <View style={styles.userInfoContainer}>
          <ProfileIcon name="user-circle-o" size={20} />
          <Text style={styles.usersName}>
            {articleItem?.written_by} in {articleItem?.written_in}
          </Text>
        </View>

        <Text style={styles.articleTitle}>{articleItem?.article_title}</Text>
        <View style={styles.time}>
          <Text style={styles.timeText}>{articleItem?.published_on}</Text>
          <DotIcon name="dot-single" size={16} />
          <Text style={styles.timeText}>{articleItem?.time_to_read}</Text>
        </View>
      </View>

      <View style={styles.articleLeftColumn}>
        <Image
          source={{uri: articleItem?.article_image_address}}
          width={80}
          height={60}
        />
        <View style={styles.articleLeftIcons}>
          <AddBookmark name="bookmark-add" size={24} />
          <BlockIcon name="blocked" size={20} />
          <MenuIcon name="dots-three-vertical" size={20} />
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    padding: globalPadding,
    flexDirection: 'row',
    width: '100%',
  },
  articleText: {
    display: 'flex',
    gap: 10,
    width: '70%',
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  usersName: {
    fontSize: 14,
    color: 'grey',
  },
  articleTitle: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    color: 'grey',
  },
  articleLeftColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 20,
  },
  articleLeftIcons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 25,
  },
});
