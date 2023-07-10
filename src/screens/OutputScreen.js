import { FlatList, Pressable, View, Text } from "react-native";
import OutputComponent from "../components/OutputComponent"; 

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


export default function OutputScreen({ jsonData = mockJsonData, navigation }) {
  
    //FIX AND CHECK AND CONFIRM
  function pressHandler() {
    navigation.navigate('main');
  }

  //converts the received json file into an array, format attached below
  const datesData = Object.entries(jsonData.Dates).map(([day, data]) => {
    return {
      day,
      ...data,
    };
  });

  return (
    <View>
      <Text>Timeline</Text>
      <Text>Location: {jsonData.Location}</Text>

      <FlatList
        data={datesData}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.day} : {item.description}
            </Text>
            <OutputComponent
              day={item.day}
              description={item.description}
              timeData={item.Time}
            />
          </View>
        )}
        keyExtractor={(item, index) => item.day}
      />

      <Pressable onPress={pressHandler}>
        <Text>Return to Main Screen</Text>
      </Pressable>

    </View>
  );
}