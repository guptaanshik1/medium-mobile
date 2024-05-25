import {StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import TabInfo from './TabInfo';
import userInterestsData from '../../mocks/userInterestsData.json';
import {getTabRoutesData} from '../../utils/helpers/getTabRoutesData';
import CustomTab from './CustomTab';

const SelectableTabView = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState(getTabRoutesData(userInterestsData?.tags_followed));

  const getSceneMapInfoFromData = (): Record<string, any> => {
    const data: Record<string, any> = {};
    userInterestsData?.tags_followed?.forEach(tag => {
      data[tag] = () => <TabInfo tabData={tag} />;
    });

    return data;
  };

  const renderScene = SceneMap({...getSceneMapInfoFromData()});

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => <CustomTab {...props} />}
    />
  );
};

export default SelectableTabView;

const styles = StyleSheet.create({});
