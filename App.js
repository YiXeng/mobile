import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/screens/MainScreen";
import ExampleScreen from "./src/screens/ExampleScreen";
import OutputScreen from "./src/screens/OutputScreen";
import UserInputScreen from "./src/screens/UserInputScreen";
import DayScreen from "./src/screens/DayScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="example"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="example" component={ExampleScreen} />
        <Stack.Screen name="output" component={OutputScreen} />
        <Stack.Screen name="input" component={UserInputScreen} />
        <Stack.Screen name="day" component={DayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
