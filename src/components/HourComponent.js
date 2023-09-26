import React from "react";
import { View, Text } from "react-native";

export default function HourComponent(props) {

  const hourKey = Object.keys(props.hour)[0]; // str hourKey = Hour1
  const hour = props.hour[hourKey]; // obj hour = {time:"xxx", xxx:"xxx", ...}
  const keys = Object.keys(hour).filter((key) => key !== "time"); 

  return (
    <View>

      <View>
        <Text>Time</Text>
        <Text>{hour.time}</Text>
      </View>

      {keys.map((key) => (
        <View key={key}>
          <Text>{key}</Text>
          <Text>{hour[key]}</Text>
        </View>
      ))}
    </View>
  );
}
