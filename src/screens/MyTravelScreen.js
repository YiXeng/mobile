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
import TravelHistory from '../components/TravelHistory';
import { styles } from '../styles/Homestyles';

import { fetchAllHistoryData } from '../db/db';

const MyTravelScreen = ({ navigation }) => {
    const numKeys = useState();

    return (
        <SafeAreaView style={styles.background}>
            {console.log("Main Screen")}

            <ScrollView>

                <Image source={require('../../assets/time_icon.png')}
                    style={styles.timeIcon} />
                <Text style={styles.travelText}>Travel History</Text>

                <View style={styles.historyContainer}>
                    <Text style={styles.historyText}>History</Text>
                    <ScrollView>
                        <TravelHistory touchableCount={numKeys} navigation={navigation} />
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default MyTravelScreen;







