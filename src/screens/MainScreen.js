import React from 'react';
import { useState, useEffect } from 'react';
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
import DateTimeDisplay from '../components/DateTimeDisplay';
import { getAddressFromCoordinates, getLocation } from './LocationService';
import { styles } from '../styles/Homestyles';
import { fetchAllHistoryData } from '../db/db';

const MainScreen = ({ navigation }) => {
    const [numKeys, setNumKeys] = useState();
    const [address, setAddress] = useState('Fetching location...');


    useEffect(() => {

        const fetchLocationAndAddress = async () => {
            const currentLocation = await getLocation();
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
        getNumberOfKeys();

        // Debug Purposes
        fetchAllHistoryData().then(historyData => {
            console.log('All history data:', historyData);
        }).catch(error => {
            console.error('Failed to fetch history data:', error);
        });

    }, []);


    const getNumberOfKeys = async () => {
        try {
            const usersArray = await fetchAllHistoryData();
            console.log(usersArray);
            console.log(usersArray.length)
            setNumKeys(usersArray.length)
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <SafeAreaView style={styles.background}>
            {console.log("Main Screen")}
            <View style={{ height: 35, flexDirection: 'row' }}>
                <Image source={require('../../assets/location_icon.png')}
                    style={styles.locationIcon} />
                <Text style={styles.locationText}>{address}</Text>
                <Text style={styles.logOutText}>Log out</Text>
            </View>

            <ScrollView>

                <Text style={styles.greetingText}> Hi David !</Text>
                <Text style={styles.greetingText}> Are you looking for a trip?</Text>

                <ImageBackground
                    source={require('../../assets/Peak.png')}
                    style={styles.image_start}>
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

                <ScrollView horizontal={true} pagingEnabled={true}>
                    <ImageBackground
                        source={require('../../assets/BigSurAerial.png')}
                        style={styles.image_square}>
                        <Text style={styles.placeText}>ON, CANADA</Text>
                        <Text style={styles.spotText}>Riverdale Hills</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/BigSurCoastline.png')}
                        style={styles.image_square}>
                        <Text style={styles.placeText}>ON, CANADA</Text>
                        <Text style={styles.spotText}>Riverdale Hills</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/BigSurWatersEdge.png')}
                        style={styles.image_square}>
                        <Text style={styles.placeText}>ON, CANADA</Text>
                        <Text style={styles.spotText}>Riverdale Hills</Text>
                    </ImageBackground>
                </ScrollView>


                <ScrollView horizontal={true} pagingEnabled={true}>
                <ImageBackground
                    source={require('../../assets/BigSurAerial.png')}
                    style={styles.image}>
                    <Text style={styles.placeText}>ON, CANADA</Text>
                    <Text style={styles.spotText}>Riverdale Hills</Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../../assets/BigSurCoastline.png')}
                    style={styles.image}>
                    <Text style={styles.placeText}>ON, CANADA</Text>
                    <Text style={styles.spotText}>Riverdale Hills</Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../../assets/BigSurWatersEdge.png')}
                    style={styles.image}>
                    <Text style={styles.placeText}>ON, CANADA</Text>
                    <Text style={styles.spotText}>Riverdale Hills</Text>
                </ImageBackground>
                </ScrollView>

            </ScrollView>
        </SafeAreaView>
    );
}





export default MainScreen;







