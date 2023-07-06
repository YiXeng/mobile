import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleScreen from './src/screens/ExampleScreen';
import MainScreen from './src/screens/MainScreen';
import OutputScreen from './src/screens/OutputScreen';

const navigator = createStackNavigator ({
  example: ExampleScreen,
  main: MainScreen,
  output: OutputScreen,

}, {
  initialRouteName: 'main',
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(navigator)
