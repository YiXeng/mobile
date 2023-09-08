import OutputComponent from "../components/OutputComponent"
import { Pressable, View, Text} from "react-native";
import { styles } from "../styles/Styles";

const DayScreen = ({route, navigation}) => {
  const { passedData } = route.params;
  
  const onPressReturn  = ()=>{
    navigation.navigate("output", {key: passedData.key})
  }



  return(
    <View>
      <View style={{padding:40}}/>
      <Pressable onPress={onPressReturn } ><Text style={styles.timeline}>Return</Text></Pressable>
      <OutputComponent 
              day={passedData.day}
              description={passedData.description}
              timeData={passedData.timeData}/>
    </View>
  )

}

export default DayScreen