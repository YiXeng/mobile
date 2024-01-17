import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 确保导入路径与您的文件结构相匹配
import Homescreen from '../screens/MainScreen';
import Newplan from '../screens/UserInputScreen';
import ExampleScreen from '../screens/ExampleScreen.js';
import DayScreen from '../screens/DayScreen.js';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Homescreen} />
            <Tab.Screen name="ExampleScreen" component={ExampleScreen} />
            <Tab.Screen name="DayScreen" component={DayScreen} />
            <Tab.Screen name="Newplan" component={Newplan} />
        </Tab.Navigator>
    );
}

export default Tabs;
