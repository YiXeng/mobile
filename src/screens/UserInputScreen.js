import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import useCompletion from '../hooks/useCompletion';

const UserInputScreen = ({ route, navigation }) => {
  const {key} = route.params;

  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [dates, setDates] = useState("");
  const [preferences, setPreferences] = useState("");
  const [lengthOfTour, setLengthOfTour] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  // const [mockJsonData, setmockJsonData] = useState("");
  // const [bool, setbool] = useState("");

  // if (bool){
  //   const { loading, error, data, isValidJSON } = useCompletion({
  //     destination,
  //     budget,
  //     dates,
  //     preferences,
  //     lengthOfTour,
  //     additionalInfo,
  //   });
  // };
  
  
  // testing purposes
  // const handleSaveData = async () => {
  //   try {
  //     const jsonValue = JSON.stringify(mockJsonData);
  //     await AsyncStorage.setItem('1', jsonValue);
  //     console.log("in handle save data.");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const outputScreenHandler = () =>{
  //   setmockJsonData(data),
  //   handleSaveData(),
  //   navigation.navigate("output", { key: '1' })
  // }


  const handleSubmit = () => {
    const userInput = {
      destination,
      budget,
      dates,
      preferences,
      lengthOfTour,
      additionalInfo,
    };
    console.log("userinputscreen",userInput);

    navigation.navigate("example", { key1: {userInput}, key2: key });
    
    // if (error) return console.error(error);
    
  };

  
  // if (loading) return (
  //   <View>
  //       {/* ... */}
  //       <Text></Text>
  //       <Text></Text>
  //       <Text></Text>
  //       <Text></Text>
  //       <Text></Text>
  //       <Text></Text>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //   </View>
  // );

  return (
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
      <View style={styles.inputContainer}></View> 
      </View>


      <View style={styles.bubble}>
      <Text style={styles.label}>What's your budget?</Text>
      <TextInput 
        style={styles.input} 
        value={budget} 
        onChangeText={setBudget} 
      />
      <View style={styles.inputContainer}></View> 
      </View>



      <View style={styles.bubble}>
      <Text style={styles.label}>When do you want your trip started</Text>
      <TextInput 
        style={styles.input} 
        value={dates} 
        onChangeText={setDates} 
      />
      <View style={styles.inputContainer}></View> 
      </View>



      <View style={styles.bubble}>
      <Text style={styles.label}>What's the length of tour?</Text>
      <TextInput
        style={styles.input}
        value={lengthOfTour}
        onChangeText={setLengthOfTour}
      />
      <View style={styles.inputContainer}></View> 
      </View>


      <View style={styles.bubble}>
      <Text style={styles.label}>Any preferences about your trip?</Text>
      <TextInput
        style={styles.input}
        value={preferences}
        onChangeText={setPreferences}
      />
      <View style={styles.inputContainer}></View> 
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'lightgrey', // Background color for the bubble
    borderRadius: 10, // Border radius to create rounded corners
    padding: 10, // Padding inside the bubble
    marginBottom: 10, // Spacing between bubbles
    width: '100%', // Adjust the width as needed
  }

});

export default UserInputScreen;