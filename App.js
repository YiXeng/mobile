import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleScreen from './src/screens/ExampleScreen';


const navigator = createStackNavigator ({
  example: ExampleScreen,
}, {
  initialRouteName: 'example',
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(navigator)
