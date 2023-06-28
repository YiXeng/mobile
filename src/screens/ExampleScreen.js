import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import useCompletion from '../hooks/useCompletion';

const ExampleScreen = () => {
   
    const userInput = {
        destination: "Paris",
        budget: "1500",
        dates: "July 10th - July 20th",
        preferences: "sightseeing, food, history",
        lengthOfTour: "10",
        additionalInfo: "Interested in local cuisines and art museums."
        // Add more fields as needed
    };
    
    const { loading, error, data } = useCompletion(userInput);

    if (loading) return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text>{data}</Text>
        </View>
    );
};

export default ExampleScreen;
