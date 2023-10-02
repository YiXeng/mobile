import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, ActivityIndicator, ScrollView } from "react-native";

// ... (other imports)

const UserInputScreen = ({ navigation }) => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [dates, setDates] = useState("");
  const [preferences, setPreferences] = useState("");
  const [lengthOfTour, setLengthOfTour] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = () => {
    const userInput = {
      destination,
      budget,
      dates,
      preferences,
      lengthOfTour,
      additionalInfo,
    };
    console.log("userinputscreen", userInput);

    navigation.navigate("example", { key: { userInput } });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.tit}>Tell Us About Your Plan</Text>
        
        <View style={styles.bubble}>
          <Text style={styles.label}>Where is your final destination?</Text>
          <TextInput
            style={styles.input}
            value={destination}
            onChangeText={setDestination}
            placeholder="Your final destination"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <View style={styles.bubble}>
          <Text style={styles.label}>What's your budget?</Text>
          <TextInput 
            style={styles.input} 
            value={budget} 
            onChangeText={setBudget} 
            placeholder="Your budget"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <View style={styles.bubble}>
          <Text style={styles.label}>When do you want your trip started?</Text>
          <TextInput 
            style={styles.input} 
            value={dates} 
            onChangeText={setDates} 
            placeholder="Your starting point"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <View style={styles.bubble}>
          <Text style={styles.label}>What's the length of tour?</Text>
          <TextInput
            style={styles.input}
            value={lengthOfTour}
            onChangeText={setLengthOfTour}
            placeholder="Your final destination"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <View style={styles.bubble}>
          <Text style={styles.label}>Any preferences about your trip?</Text>
          <TextInput
            style={styles.input}
            value={preferences}
            onChangeText={setPreferences}
          />
        </View>

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  tit: {
    margin: 25,
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  label: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Change the color as needed
    width: '80%', // Adjust the width as needed
  },
  input: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    fontSize: 16,
  },
  bubble: {
    alignContent: 'center',
    backgroundColor: 'transparent', // Background color for the bubble
    borderWidth: 3,
    borderRadius: 10, // Border radius to create rodunded corners
    padding: 10, // Padding inside the bubble
    marginBottom: 10, // Spacing between bubbles
    width: '100%', // Adjust the width as needed
  }
});

export default UserInputScreen;
