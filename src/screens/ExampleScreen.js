import { useEffect } from 'react';
import React, { useState  } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import useCompletion from '../hooks/useCompletion';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ExampleScreen = ({ route, navigation }) => {
    const key  = route.params.InputKey;
    const asynckey = route.params.StorageKey;
    const [userInput, setUserInput] = useState(key)
    // const userInput = {
    //     destination: "Paris",
    //     budget: "1500",
    //     dates: "July 10th - July 14th",
    //     preferences: "sightseeing, food, history",
    //     lengthOfTour: "4",
    //     additionalInfo: "Interested in local cuisines and art museums."
    //     // Add more fields as needed
    // };
    const { loading, error, data } = useCompletion(userInput);

    useEffect(() => {
        if (data) {
            handleSaveData();
            console.log(userInput);
            setUserInput(key);
            navigation.navigate("output", { key: asynckey });
        }
    }, [data]);

    const handleSaveData = async () => {
        try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(asynckey, jsonValue);
        console.log("in handle save data.");
        } catch (error) {
        console.log(error);
        }
    };

    const handleSubmit = () => {
        handleSaveData();
        console.log(userInput);
        setUserInput(key);
        navigation.navigate("output", { key: asynckey });
    };

    

    if (loading) return (
        <View>
            {/* ... */}
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );

    if (error) return console.error(error);

    return (
        <ScrollView style={{ padding: 10 }}>
            {console.log("examplescreen",userInput)}
            {console.log("key:",key)}
            {/* {handleSubmit()} */}
            {/* <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text>Data:</Text>
            <Text>{data ? JSON.stringify(data, null, 2) : "No data available"}</Text> */}
        </ScrollView>
    );
};

export default ExampleScreen;
