import {FlatList, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useTabStore} from './tabStore';
import selectedTabList from '../../mocks/articlesList.json';
import ArticleCard from './components/ArticleCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {THomeNavigationParamList} from '../../utils/data';

type THomeListingProps = NativeStackScreenProps<THomeNavigationParamList>;

const HomeListing = ({navigation}: THomeListingProps) => {
  const {selectedHomeTab} = useTabStore();

  return (
    <>
      <ScrollView>
        <FlatList
          style={styles.listContainer}
          numColumns={1}
          data={selectedTabList}
          renderItem={({item}) => {
            return (
              <Pressable
                key={item?.article_id}
                onPress={() => navigation.navigate('EntireArticle')}>
                <ArticleCard articleItem={item} />
              </Pressable>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          scrollEnabled={true}
        />
      </ScrollView>
    </>
  );
};

export default HomeListing;

const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    left: 0,
    right: 0,
  },
  itemSeparator: {
    borderWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});
