import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/screens/MainScreen";
import ExampleScreen from "./src/screens/ExampleScreen";
import OutputScreen from "./src/screens/OutputScreen";
import UserInputScreen from "./src/screens/UserInputScreen";
import DayScreen from "./src/screens/DayScreen";
import Tabs from "./src/navigation/tabs"; // 导入 Tabs 组件

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="example" component={ExampleScreen} />
        <Stack.Screen name="output" component={OutputScreen} />
        <Stack.Screen name="input" component={UserInputScreen} />
        <Stack.Screen name="day" component={DayScreen} />
        <Stack.Screen name="tabs" component={Tabs} /> {/* 添加 Tabs 作为一个新的屏幕 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
