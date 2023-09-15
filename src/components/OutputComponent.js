import { View, FlatList, Dimensions } from "react-native";
import HourComponent from "./HourComponent";
const screenHeight = Dimensions.get('window').height;
export default function OutputComponent(props) {
  const hourArr = Object.keys(props.timeData).map((key) => ({
    [key]: props.timeData[key],
  }));

  return (
    <FlatList
      data={hourArr}
      renderItem={({ item }) => (
        <View>
          <HourComponent hour={item} />
        </View>
      )}
      //test
      keyExtractor={(item, index) => Object.keys(item)[0]}
      style={{height: 400}}
    />
  );
}
