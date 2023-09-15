
import { FlatList, TouchableHighlight, View, Text, Pressable, NestableScrollContainer } from "react-native";
import OutputComponent from "../components/OutputComponent";
import { styles } from "../styles/Styles";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ScrollView } from "react-native-gesture-handler";

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
      <Text style={styles.timeline}>Travel Plan</Text>

      <Text style={styles.button}>Location: {jsonData.Location}</Text>

      
      <ScrollView showsVerticalScrollIndicator={false}>

      <View
        style={styles.outputcomponent}
      >
        <Text style={{textAlign: "center", fontSize: 20, color: 'white'}}>Packing List</Text>
      </View>
      <View style={{padding: 10}}/>
      <View
        style={styles.outputcomponent}
      >
        <Text style={{textAlign: "center", fontSize: 20, color: 'white'}}>Navigation</Text>
      </View>
      <View style={{padding: 10}}/>
      <View style={styles.outputcomponent}>
        <Text style={{textAlign: "center", fontSize: 20, color: 'white'}}>Schedule</Text>
        <FlatList
        data={datesData}
        renderItem={({ item }) => (
          <View style={{padding: 3, margin: 10 }}>
            <Pressable
            onPress={() => {
              navigation.navigate("day", { passedData: {day: item.day, description: item.description, timeData: item.Time, key: key} })
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "gray" : "",
              },
            ]}><Text style={styles.day}>
              {item.day} : {item.description}
            </Text></Pressable>
          
          </View>
        )}
        // style={styles.listContainer}
        keyExtractor={(item, index) => item.day}
      />
      </View>

      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0.1)"
        onPress={pressHandler}
      >
        <Text style={styles.button}>Return to Main Screen</Text>
      </TouchableHighlight>

      <View style={{padding: 50}}/>
      </ScrollView>
    </View>
  );
}
