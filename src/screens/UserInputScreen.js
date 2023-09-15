import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const UserInputScreen = ({ navigation }) => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [dates, setDates] = useState("");
  const [preferences, setPreferences] = useState("");
  const [lengthOfTour, setLengthOfTour] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  
  //test
  const mockJsonData = {
    Location: "Test Location",
    Dates: {
      "2023-07-10": {
        description: "Day 1 Description",
        Time: {
          Hour1: {
            time: "08:00",
            temperature: "25°C",
            weather: "Sunny",
          },
          Hour2: {
            time: "09:00",
            temperature: "27°C",
            weather: "Sunny",
          },
          // add more hours if needed
        },
      },
      "2023-07-11": {
        description: "Day 2 Description",
        Time: {
          Hour1: {
            time: "08:00",
            temperature: "24°C",
            weather: "Cloudy",
          },
          Hour2: {
            time: "09:00",
            temperature: "26°C",
            weather: "Cloudy",
          },
          // add more hours if needed
        },
      },
      // add more dates if needed
    },
  };

  // testing purposes
  const handleSaveData = async () => {
    try {
      const jsonValue = JSON.stringify(mockJsonData);
      await AsyncStorage.setItem('1', jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    const userInput = {
      destination,
      budget,
      dates,
      preferences,
      lengthOfTour,
      additionalInfo,
    };
    console.log(userInput);
    handleSaveData();
    navigation.navigate("output", { key: '1' });
  };

  return (
    <View style={styles.container}>
      <Text>Destination</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
      />

      <Text>Budget</Text>
      <TextInput style={styles.input} value={budget} onChangeText={setBudget} />

      <Text>Dates</Text>
      <TextInput style={styles.input} value={dates} onChangeText={setDates} />

      <Text>Preferences</Text>
      <TextInput
        style={styles.input}
        value={preferences}
        onChangeText={setPreferences}
      />

      <Text>Length Of Tour</Text>
      <TextInput
        style={styles.input}
        value={lengthOfTour}
        onChangeText={setLengthOfTour}
      />

      <Text>Additional Info</Text>
      <TextInput
        style={styles.input}
        value={additionalInfo}
        onChangeText={setAdditionalInfo}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default UserInputScreen;
