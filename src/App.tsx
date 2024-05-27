import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './components/Router';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
