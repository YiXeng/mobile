import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import useCompletion from '../hooks/useCompletion';

const UserInputScreen = ({ navigation }) => {

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

  const outputScreenHandler = () =>{
    setmockJsonData(data),
    handleSaveData(),
    navigation.navigate("output", { key: '1' })
  }


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

    navigation.navigate("example", { key: {userInput} });
    
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
