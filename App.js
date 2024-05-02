import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/screens/MainScreen";
import MyTravelScreen from "./src/screens/MyTravelScreen";
import Community from "./src/screens/Community";
import Profile from "./src/screens/ProfileScreen";
import ExampleScreen from "./src/screens/ExampleScreen";
import OutputScreen from "./src/screens/OutputScreen";
import UserInputScreen from "./src/screens/UserInputScreen";
import DayScreen from "./src/screens/DayScreen";

import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();




function Home() {
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={{
        tabBarActiveTintColor: '#002FA7',
        headerShown: false,
      }}>

      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyTravel"
        component={MyTravelScreen}
        options={{
          tabBarLabel: 'MyTravel',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bag-suitcase" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NewTravel"
        component={UserInputScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="example" component={ExampleScreen} />
        <Stack.Screen name="output" component={OutputScreen} />
        <Stack.Screen name="input" component={UserInputScreen} />
        <Stack.Screen name="day" component={DayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
