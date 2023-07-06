import { View, FlatList } from "react-native";
import HourComponent from "./HourComponent";

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
      keyExtractor={(item, index) => Object.keys(item)[0]}
    />
  );
}
