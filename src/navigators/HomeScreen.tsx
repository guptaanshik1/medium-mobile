import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {THomeNavigationParamList} from '../utils/data';
import EntireArticle from '../pages/EntireArticle/view';
import HomeListing from '../pages/HomeListing/view';

const HomeScreenStack = createNativeStackNavigator<THomeNavigationParamList>();

const HomeScreen = () => {
  return (
    <HomeScreenStack.Navigator screenOptions={{headerShown: false}}>
      <HomeScreenStack.Screen name="HomeListing" component={HomeListing} />
      <HomeScreenStack.Screen name="EntireArticle" component={EntireArticle} />
    </HomeScreenStack.Navigator>
  );
};

export default HomeScreen;
