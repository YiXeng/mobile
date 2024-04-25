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
import { styles } from '../styles/Homestyles';
import TravelRecommend from '../components/TravelRecommend';
import { getAddressFromCoordinates, getLocation } from './LocationService';

import { fetchAllHistoryData } from '../db/db';

const Community = ({ navigation }) => {
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
            {console.log("Community")}

                <Image source={require('../../assets/community.png')}
                    style={styles.communityIcon} />

                <Text style={styles.travelText}>Community</Text> 

                <View style={styles.communityContainer}>
                    <Text style={styles.communityText}>Community</Text>
                    <ScrollView>
                        <TravelRecommend touchableCount={numKeys} navigation={navigation} />
                    </ScrollView>
                </View>
        </SafeAreaView>
    );
}



export default Community;







