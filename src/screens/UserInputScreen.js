import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");


const UserInputScreen = ({ route, navigation }) => {
  const { key } = route.params;
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [dates, setDates] = useState("");
  const [preferences, setPreferences] = useState("");
  const [lengthOfTour, setLengthOfTour] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [moreInfoText, setMoreInfoText] = useState("");
  const [expandedInfo, setExpandedInfo] = useState({
    purpose: "",
    accommodation: "",
    dietaryRequirements: "",
    specialConsiderations: "",
  });

  const toggleAdditionalInfo = () => {
    setAdditionalInfo(!additionalInfo);
  };

  const addMore = () => {
    // Implement logic to handle additional questions and save their values.
  };

  const handleSubmit = () => {
    const userInput = {
      destination,
      budget,
      dates,
      preferences,
      lengthOfTour,
      additionalInfo: expandedInfo, // Include the expanded info in the user input.
    };
    console.log("userinputscreen", userInput);

    navigation.navigate("example", { InputKey: { userInput }, StorageKey: key });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.tit}>Tell Us About Your Plan</Text>

        <Text style={styles.label}>Where is your final destination?</Text>
        <View style={styles.bubble}>
          <TextInput
            style={styles.input}
            value={destination}
            onChangeText={setDestination}
            placeholder="Your final destination"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <Text style={styles.label}>What's your budget?</Text>
        <View style={styles.bubble}>
          <TextInput
            style={styles.input}
            value={budget}
            onChangeText={setBudget}
            placeholder="Your budget"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <Text style={styles.label}>When do you want your trip started?</Text>
        <View style={styles.bubble}>
          <TextInput
            style={styles.input}
            value={dates}
            onChangeText={setDates}
            placeholder="Your starting point"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <Text style={styles.label}>What's the length of tour?</Text>
        <View style={styles.bubble}>
          <TextInput
            style={styles.input}
            value={lengthOfTour}
            onChangeText={setLengthOfTour}
            placeholder="Your final destination"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <Text style={styles.label}>Any preferences about your trip?</Text>
        <View style={styles.bubble}>
          <TextInput
            style={styles.input}
            value={preferences}
            onChangeText={setPreferences}
            placeholder="Your final destination"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={toggleAdditionalInfo}
        >
          <View style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>
              {additionalInfo ? "Hide Additional Info" : "Add Additional Info"}
            </Text>
          </View>

        </TouchableOpacity>

        {additionalInfo && (
          <View>
            <Text style={styles.label}>What is the purpose of Travel?</Text>
            <View style={styles.bubble}>
              <TextInput
                style={styles.input}
                value={expandedInfo.purpose}
                onChangeText={(text) =>
                  setExpandedInfo({ ...expandedInfo, purpose: text })
                }
                placeholder="Purpose of Travel"
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <Text style={styles.label}>Preferred accommodation type</Text>
            <View style={styles.bubble}>
              <TextInput
                style={styles.input}
                value={expandedInfo.accommodation}
                onChangeText={(text) =>
                  setExpandedInfo({ ...expandedInfo, accommodation: text })
                }
                placeholder="Accommodation"
                placeholderTextColor="#A9A9A9"
              />
            </View>
            
            <Text style={styles.label}>Food & Dietary Requirements</Text>
            <View style={styles.bubble}>
              <TextInput
                style={styles.input}
                value={expandedInfo.dietaryRequirements}
                onChangeText={(text) =>
                  setExpandedInfo({
                    ...expandedInfo,
                    dietaryRequirements: text,
                  })
                }
                placeholder="Dietary Requirements"
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <Text style={styles.label}>Special Considerations</Text>
            <View style={styles.bubble}>
              <TextInput
                style={styles.input}
                value={expandedInfo.specialConsiderations}
                onChangeText={(text) =>
                  setExpandedInfo({
                    ...expandedInfo,
                    specialConsiderations: text,
                  })
                }
                placeholder="Special Considerations"
                placeholderTextColor="#A9A9A9"
              />
            </View>
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <View style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles and component export remain unchanged

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  tit: {
    alignSelf: 'center',
    marginLeft: width * 0.01,
    marginRight: width * 0.01,
    marginTop: height * 0.08,
    marginBottom: height * 0.03,
    justifyContent: "center",
    fontSize: width * 0.07,
    fontWeight: "bold",
  },
  label: {
    alignSelf: 'center',
    fontSize: width * 0.05,
    marginBottom: height * 0.015,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: width * 0.1,
  },
  input: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.015,
    fontSize: width * 0.05,
  },
  bubble: {
    alignContent: 'center',
    backgroundColor: 'transparent', // Background color for the bubble
    borderWidth: 3,
    borderRadius: width * 0.02, // Border radius to create rounded corners
    marginBottom: height * 0.02, // Spacing between bubbles
    width: '100%', // Adjust the width as needed
  },
  button: {
    height: 50,
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#002FA7',
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  ButtonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
});


export default UserInputScreen;