import {
  FlatList,
  TouchableHighlight,
  View,
  Text,
  useState,
} from "react-native";
import OutputComponent from "../components/OutputComponent";
import { styles } from "../styles/Styles";

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

export default function OutputScreen({
  jsonData = mockJsonData,
  navigation,
}) {


  function pressHandler() {
    navigation.navigate('main');
  }

  const datesData = Object.entries(jsonData.Dates).map(([day, data]) => {
    return {
      day,
      ...data,
    };
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.timeline}>Timeline</Text>
      <Text style={styles.button}>Location: {jsonData.Location}</Text>

      <FlatList
        data={datesData}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "#edf2f4", padding: 3, margin: 10 }}>
            <Text style={styles.day}>
              {item.day} : {item.description}
            </Text>
            <OutputComponent
              day={item.day}
              description={item.description}
              timeData={item.Time}
            />
          </View>
        )}
        style={styles.listContainer}
        keyExtractor={(item, index) => item.day}
      />

      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.1)"
        onPress={pressHandler}
      >
        <Text style={styles.button}>Return to Main Screen</Text>
      </TouchableHighlight>
    </View>
  );
}