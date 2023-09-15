import OutputComponent from "../components/OutputComponent";
import { Pressable, View, Text, Dimensions, StyleSheet} from "react-native";
import { styles } from "../styles/Styles";


const DayScreen = ({ route, navigation }) => {
  const { passedData } = route.params;
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
      <View style={{ padding: 20 }} />
      <Pressable onPress={onPressReturn}>
        <Text style={styles.dayComponentReturn}> &lt; return </Text>
      </Pressable>
      <View style={{ padding: 150 }} />
      <Text style={styles.timeline}>{passedData.description}</Text>
      <Text style={styles.dayTime}>{formatDate(passedData.day)}</Text>
      <OutputComponent
        day={passedData.day}
        description={passedData.description}
        timeData={passedData.timeData}
      />

    </View>
  );
};

export default DayScreen;
