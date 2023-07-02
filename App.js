import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleScreen from './src/screens/ExampleScreen';
import MainScreen from './src/screens/MainScreen';

const navigator = createStackNavigator ({
  example: ExampleScreen,
  main: MainScreen

}, {
  initialRouteName: 'main',
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(navigator)
