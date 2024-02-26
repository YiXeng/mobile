import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/screens/MainScreen";
import ExampleScreen from "./src/screens/ExampleScreen";
import OutputScreen from "./src/screens/OutputScreen";
import UserInputScreen from "./src/screens/UserInputScreen";
import DayScreen from "./src/screens/DayScreen";

import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';

import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

Amplify.configure(awsConfig);

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>

        <Tab.Screen
        name="main"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
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
  );}
