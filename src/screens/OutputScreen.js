import { FlatList, TouchableHighlight, View, Text, Pressable, NestableScrollContainer,Image  } from "react-native";
import OutputComponent from "../components/OutputComponent";
import { styles } from "../styles/Styles";
import { useEffect, useState} from "react";
import MapViewComponent from '../screens/MapViewComponent'; 


import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ScrollView } from "react-native-gesture-handler";
import PackingList from "../components/PackingList";


export default function OutputScreen({ route, navigation }) {
  const { key } = route.params;
  const [jsonData, setJsonData] = useState({});
  const [datesData, setDatesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const mapStyle = {
    container: styles.mapContainer, 
    map: styles.map, 
  };

  const [selectedDay, setSelectedDay] = useState(null);
  const [placeNames, setPlaceNames] = useState([]);

  const handlePressDay = (item) => {
    const dayPlaceNames = Object.values(item.Time).reduce((acc, activity) => {
      if (activity.Type === 'TA') {
        acc.push(activity.ActivityName);
      }
      return acc;
    }, []);
  
    // Navigate to the "day" screen with the necessary data
    navigation.navigate("day", {
      passedData: {
        day: item.day,
        description: item.IndividualDay,
        timeData: item.Time,
        key: key,
        placeNames: dayPlaceNames, // Include place names for the map
      },
    });
  };
  
  
  
  


  const initialRegion = {
    latitude: 37.78825, 
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  

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
      {/* <Text style={styles.timeline}>Travel</Text> */}

      <Text style={styles.location}>{jsonData.Location}</Text>

      
      <ScrollView showsVerticalScrollIndicator={false}>

      <View
        style={styles.outputcomponent}
      >
        <PackingList json={jsonData.PackingList}/>
      </View>
      <View style={{padding: 10}}/>

      <View style={styles.outputcomponent}>
        {/* <Text style={styles.ComponentTitle}>Navigation</Text> */}
        {/* Insert MapViewComponent here with the location prop */} 
        <MapViewComponent style={mapStyle} placeNames="china"/>
      </View> 




      <View style={{padding: 10}}/>



      <View style={styles.outputcomponent}>
        <Text style={styles.ComponentTitle}>Schedule</Text>
        <FlatList
          data={datesData}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Pressable
                onPress={() => handlePressDay(item)}
                style={styles.day}>
                <Text style={styles.IndividualText}>
                  {item.day} : {item.IndividualDay}
                </Text>
              </Pressable>
            </View>
          )}
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
