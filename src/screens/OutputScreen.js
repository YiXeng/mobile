import { FlatList, Pressable, View, Text } from "react-native";
import OutputComponent from "../components/OutputComponent"; 

export default function OutputScreen({ jsonData }) {
  
    //FIX AND CHECK AND CONFIRM
  function pressHandler() {
    navigator.navigate("MainScreen");
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