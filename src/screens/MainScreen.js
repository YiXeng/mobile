import React, { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    ImageBackground,
    Dimensions,
    View,
} from 'react-native'
import Constants from 'expo-constants';
import TravelHistory from '../components/TravelHistory';
import DateTimeDisplay from '../components/DateTimeDisplay';
import AsyncStorage from '@react-native-async-storage/async-storage';




const MainScreen = ({ navigation }) => { // Use destructuring to get the navigation prop
    const [numKeys, setNumKeys] = useState();


    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState('Fetching location...');


    useEffect(() => {
        const fetchLocationAndAddress = async () => {
            const currentLocation = await getLocation();
            setLocation(currentLocation);
            if (currentLocation) {
                const addressResult = await getAddressFromCoordinates(
                    currentLocation.coords.latitude,
                    currentLocation.coords.longitude,
                );
                if (addressResult) {
                    // Constructing a simple address line (you can format it as you like)
                    setAddress(`${addressResult.city}, ${addressResult.region}, ${addressResult.country}`);
                }
            }
        };


        fetchLocationAndAddress();
    }, []);


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
        <SafeAreaView style={styles.background}>
            {console.log("MainScreen, Key:", { numKeys })}
            {/* <TouchableOpacity
               onPress={() => {
                   console.log('User input Page');
                   navigation.navigate('input',  { key: (numKeys+1).toString() }); // Call navigate on the navigation prop
               }}
               style={styles.buttonContainer}
           >
               <Text style = {styles.buttonText}>Create a new Travel Plan</Text>
           </TouchableOpacity> */}

            <View style={{ height: 35, flexDirection: 'row' }}>
                <Image source={require('../../assets/location_icon.png')}
                    style={styles.locationIcon} />
                <Text style={styles.locationText}>{address}</Text>
                <Text>Log out</Text>
            </View>

            <ScrollView>
                <DateTimeDisplay />

                <Text style={styles.greetingText}> Hi David !</Text>
                <Text style={styles.greetingText}> Are you looking for a trip?</Text>

                <ImageBackground
                    source={require('../../assets/backgroundPic.png')}
                    style={styles.image}>
                    <Text style={styles.placeText}>ON, CANADA</Text>
                    <Text style={styles.spotText}>Riverdale Hills</Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('User input Page');
                            navigation.navigate('input', { key: (numKeys + 1).toString() }); // Call navigate on the navigation prop
                        }}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </ImageBackground>

                <Image source={require('../../assets/time_icon.png')}
                    style={styles.timeIcon} />
                <Text style={styles.travelText}>Travel History</Text>

                <View style={styles.historyContainer}>
                    {console.log("Output Screen")}
                    <Text style={styles.historyText}>History</Text>
                    <ScrollView>
                        <TravelHistory touchableCount={numKeys} navigation={navigation} />
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
// ... your style definitions and export statement




const styles = StyleSheet.create({
    background: {
        marginTop: Constants.statusBarHeight,
        flex: 0,
    },


    //navigation




    //Contianers
    buttonContainer: {
        height: 35,
        width: 100,
        marginHorizontal: (Dimensions.get('window').width - 170),
        marginTop: -20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    historyContainer: {
        marginHorizontal: 30,
        marginTop: 10,

        justifyContent: 'center',
        alignItems: 'center',
    },


    //texts
    buttonText: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    locationText: {
        fontSize: 14,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    logOutText: {
        fontSize: 14,
        marginVertical: 5,
        left: (Dimensions.get('window').width - 250),
        fontWeight: 'bold',


    },
    greetingText: {
        fontSize: 26,
        marginVertical: 5,
        marginHorizontal: 30,
        fontWeight: 'bold',
    },
    placeText: {
        fontSize: 14,
        color: 'white',
        marginTop: 190,
        marginLeft: 20,

    },
    spotText: {
        fontSize: 24,
        color: 'white',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    travelText: {
        fontSize: 26,
        marginLeft: 90,
        marginTop: -35,
        fontWeight: 'bold'
    },


    //images
    locationIcon: {
        width: 28,
        height: 28,
        marginHorizontal: 10,
    },
    timeIcon: {
        width: 35,
        height: 35,
        marginHorizontal: 30,


    },
    image: {
        borderRadius: 10,
        width: 385,
        height: 270,
        width: (Dimensions.get('window').width - 50),
        marginVertical: 30,
        marginHorizontal: 22,
        overflow: 'hidden',


    },

});


export default MainScreen;







