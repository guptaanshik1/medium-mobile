import {View} from 'react-native';
import React from 'react';
import HomeCommonLayout from './components/HomeCommonLayout';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import MainData from './components/MainData';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <HomeCommonLayout header={<MainHeader />} footer={<MainFooter />}>
        <MainData />
      </HomeCommonLayout>
    </View>
  );
};

export default App;
