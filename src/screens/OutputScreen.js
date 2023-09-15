import { FlatList, TouchableHighlight, View, Text } from "react-native";
import OutputComponent from "../components/OutputComponent";
import { styles } from "../styles/Styles";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OutputScreen({ route, navigation }) {
  const { key } = route.params;
  const [jsonData, setJsonData] = useState({});
  const [datesData, setDatesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((data) => {
        const jData = JSON.parse(data);
        const processedDatesData = Object.entries(jData.Dates).map(
          ([day, data]) => {
            return {
              day,
              ...data,
            };
          }
        );
        setJsonData(jData);
        setDatesData(processedDatesData);
        setIsDataFetched(true); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); 
      });
  }, []);
  
  function pressHandler() {
    navigation.navigate("main");
  }

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!isDataFetched) {
    return (
      <View>
        <Text>Error fetching data.</Text>
      </View>
    );
  }

  return (
    

    <View style={styles.wrapper}>
      {console.log("Output Screen")}
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
