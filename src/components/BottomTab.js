import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import MainScreen from '../screens/MainScreen';
import MyTravelScreen from '../screens/MyTravelScreen';
import UserInputScreen from '../screens/UserInputScreen';
import Community from '../screens/Community';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
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


const styles = {
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
}

export default BottomTab;