import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleScreen from './src/screens/ExampleScreen';
import MainScreen from './src/screens/MainScreen';
import UserInputScreen from './src/screens/UserInputScreen'; 


const navigator = createStackNavigator ({
  example: ExampleScreen,
  main: MainScreen,
  input: UserInputScreen


}, {
  initialRouteName: 'input',
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(navigator)
