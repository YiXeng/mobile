import { useEffect } from 'react';
import React, { useState  } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import useCompletion from '../hooks/useCompletion';
import { insertJsonData } from '../db/db';

const ExampleScreen = ({ route, navigation }) => {
    const key  = route.params.InputKey;
    const [userInput, setUserInput] = useState(key)
    const { loading, error, data } = useCompletion(userInput);

    useEffect(() => {
        if (data) {
            saveData().then(userId => {
                if (userId) {
                    console.log(`User saved with ID: ${userId}`);
                    console.log(userInput);
                    setUserInput(key);
                    navigation.navigate("output", { key: userId });
                }
            });
        }
    }, [data]);

    async function saveData() {
        try {
            const jsonValue = JSON.stringify(data);
            console.log(jsonValue)

            const userId = await insertJsonData(jsonValue);
            console.log("Inserted user ID:", userId);
            return userId; // Optionally return the ID if needed
        } catch (error) {
          console.error("Error inserting user:", error);
          return null; // Handle the error as appropriate
        }
    }

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

    if (error) return (
        <View>
        {console.error(error)}
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>{error}</Text>
    </View>
        
    );

    return (
        <ScrollView style={{ padding: 10 }}>
            {console.log("examplescreen",userInput)}
            {console.log("key:",key)}
        </ScrollView>
    );
};

export default ExampleScreen;
