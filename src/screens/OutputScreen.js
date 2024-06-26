import { FlatList, TouchableHighlight, View, Text, Pressable, NestableScrollContainer,Image  } from "react-native";
import OutputComponent from "../components/OutputComponent";
import { styles } from "../styles/Styles";
import { useEffect, useState} from "react";

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ScrollView } from "react-native-gesture-handler";
import PackingList from "../components/PackingList";
import {fetchJsonData} from "../db/db";


export default function OutputScreen({ route, navigation }) {
  const { key } = route.params;
  const [jsonData, setJsonData] = useState({});
  const [datesData, setDatesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    fetchJsonData(key).then(data => {
      const jData = JSON.parse(data);
      console.log("in parsing json data", jData);
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
    }).catch(error => {
      console.error(error);
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
    
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.wrapper}>

      {console.log("Output Screen")}
    <View style={styles.OutputTitle}>
      <Image
        source={require('../../assets/rec.png')}
        style={{ width: 30, height: 30, paddingBottom: 5, paddingTop: 5, marginBottom: 10, marginTop: 18}}
      />
      <Text style={styles.timeline}>Travel Plan {jsonData.DatesSummary}</Text>
      </View>

      <Text style={styles.location}>{jsonData.Location}</Text>

      
      <ScrollView showsVerticalScrollIndicator={false}>

      <View
        style={styles.outputcomponent}
      >
        <PackingList json={jsonData.PackingList}/>
      </View>
      <View style={{padding: 10}}/>

      <View 
        style={styles.outputcomponent}
      >
        <Text style={styles.ComponentTitle}>Navigation</Text>
      </View>



      <View style={{padding: 10}}/>



      <View style={styles.outputcomponent}>
        <Text style={styles.ComponentTitle}>Schedule</Text>
        <FlatList
        data={datesData}
        renderItem={({ item }) => (
          <View style={{padding: 10 }}>
            <Pressable
            
            onPress={() => {
              navigation.navigate("day", { passedData: {day: item.day, description: item.IndividualDay, timeData: item.Time, key: key} })
            }}
            style={styles.day}>
              <Text style={styles.IndividualText}>
              {item.day} : {item.IndividualDay}
            </Text>
            </Pressable>
          
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
    </GestureHandlerRootView>
  );
}
