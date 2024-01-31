import OutputComponent from "../components/OutputComponent";
import { Pressable, View, Text, Dimensions, StyleSheet} from "react-native";
import { styles } from "../styles/Styles";
import MapViewComponent from "./MapViewComponent";


const DayScreen = ({ route, navigation }) => {
  const { passedData } = route.params;
  const { day, description, timeData, placeNames } = passedData;

  const onPressReturn = () => {
    navigation.navigate("output", { key: passedData.key });
  };


  function formatDate(inputDate) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const parts = inputDate.split('-');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are 0-based in JavaScript
    const day = parseInt(parts[2]);
  
    const date = new Date(year, month, day);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const monthName = months[date.getMonth()];
  
    return `${dayOfWeek} ${monthName} ${day}, ${year}`;
  }
  


  return (
    <View>
      {/* Return Button */}
      <Pressable onPress={onPressReturn} style={styles.returnButton}>
        <Text style={styles.dayComponentReturn}> &lt; return </Text>
      </Pressable>

      {/* Day Information */}
      <Text style={styles.timeline}>{description}</Text>
      <Text style={styles.dayTime}>{formatDate(day)}</Text>

      {/* OutputComponent */}
      <OutputComponent
        day={day}
        description={description}
        timeData={timeData}
      />

        {/* Conditional rendering of MapViewComponent */}
        {placeNames && placeNames.length > 0 && (
        <MapViewComponent 
        style={{ container: styles.mapContainer, map: styles.map }} placeNames={placeNames} />
      )}


    </View>
  );
};

export default DayScreen;
