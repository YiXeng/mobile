import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    ScrollView,
    View } from 'react-native';

import Constants from 'expo-constants'
import TravelHistory from '../components/TravelHistory';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const MainScreen = ({ navigation }) => { // Use destructuring to get the navigation prop
    const [numKeys, setNumKeys] = useState();

    const getNumberOfKeys = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          const numberOfKeys = keys.length;
          return numberOfKeys;
        } catch (error) {
          console.error("Error getting number of keys:", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            const fetchNumberOfKeys = async () => {
                const numberOfKeys = await getNumberOfKeys();
                setNumKeys(numberOfKeys);
            };

            fetchNumberOfKeys();
        }, [])
    );


    return (
        <SafeAreaView style = {styles.background}>
            <TouchableOpacity 
                onPress={() => {
                    console.log('User input Page');
                    navigation.navigate('input',  { key: (numKeys+1).toString() }); // Call navigate on the navigation prop
                }}
                style={styles.buttonContainer}
            >
                <Text style = {styles.buttonText}>Create a new Travel Plan</Text>
            </TouchableOpacity>

            <View style={styles.historyContainer}>
                <Text style = {styles.historyText}>History</Text>
                <ScrollView>
                    <TravelHistory touchableCount ={numKeys} navigation={navigation}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

// ... your style definitions and export statement


const styles = StyleSheet.create({
    background:{
        marginTop: Constants.statusBarHeight,

    },
    buttonContainer: {
        height: 60,
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: '#5d57ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    historyContainer:{
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5d57ff',
        borderRadius: 8,
        borderWidth: 4,
       
    },
    buttonText:{
         color:'#fff',
         fontSize: 25,
    },
    historyText:{
        color:'#5d57ff',
        fontSize: 25,
        marginVertical: 15,
   }

})

export default MainScreen;