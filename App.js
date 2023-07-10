import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleScreen from './src/screens/ExampleScreen';
import MainScreen from './src/screens/MainScreen';
import OutputScreen from './src/screens/OutputScreen';
import UserInputScreen from './src/screens/UserInputScreen';

const navigator = createStackNavigator ({
  example: ExampleScreen,
  main: MainScreen,
  output: OutputScreen,
  input: UserInputScreen

}, {
  initialRouteName: 'main',
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(navigator)
