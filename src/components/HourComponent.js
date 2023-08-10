import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";

export default function HourComponent(props) {
  const hourKey = Object.keys(props.hour)[0]; // str hourKey = Hour1
  const hour = props.hour[hourKey]; // obj hour = {time:"xxx", xxx:"xxx", ...}
  const keys = Object.keys(hour).filter((key) => key !== "time");

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.time}>Time</Text>
        <Text style={styles.time}>{hour.time}</Text>
      </View>

      {keys.map((key) => (
        <View  style={{ flexDirection: "row" }} key={key}>
          <Text style={styles.time}>{key}</Text>
          <Text style={styles.time}>{hour[key]}</Text>
        </View>
      ))}
    </View>
  );
}
