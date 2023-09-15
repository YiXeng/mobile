import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AddIcon from '@mui/icons-material/Add';

const UserInputScreen = ({ navigation }) => {
  
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [dates, setDates] = useState('');
  const [preferences, setPreferences] = useState('');
  const [lengthOfTour, setLengthOfTour] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [more, setMore] = useState(true)

  const addMore = () => {
    setMore(!more)
  }

  const handleSubmit = (  ) => {
    const userInput = {
      destination,
      budget,
      dates,
      preferences,
      lengthOfTour,
      additionalInfo
    };
    console.log(userInput);
    navigation.navigate('output');
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
      <TextInput 
        style={styles.input} 
        value={budget} 
        onChangeText={setBudget} 
      />
      
      <Text>Dates</Text>
      <TextInput 
        style={styles.input} 
        value={dates} 
        onChangeText={setDates} 
      />

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

      {more ? (
        <TouchableOpacity onPress={addMore} style={styles.moreButton}>
          <AddIcon />
          <Text style={styles.moreText}>Add More</Text>
        </TouchableOpacity>
      ) : <View>
        <Text>More Info</Text>
        <TextInput style={styles.input}/>
        </View>}

      <Button 
        title="Submit" 
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default UserInputScreen;
