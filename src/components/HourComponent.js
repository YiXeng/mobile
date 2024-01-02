import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HourComponent(props) {

  const hourKey = Object.keys(props.hour)[0]; // str hourKey = Hour1
  const hour = props.hour[hourKey]; // obj hour = {time:"xxx", xxx:"xxx", ...}
  const keys = Object.keys(hour).filter((key) => key !== "time"); 

  return (
    <View style={styles.container}>

      <View>
        {/* <Text>Time</Text> */}
        <Text style={styles.title}>{hour.time}</Text>
      </View>

      {keys.map((key) => (
        <View key={key}>
          {/* <Text>{key}</Text> */}
          <Text>{hour[key]}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 20,
      borderColor: '#1f1e33',
      borderWidth: 1,
      margin: 30,
      padding: 10,
      borderRadius:10,


  },
  title:{
    fontSize: 20,
    textAlign: 'center',
    color: '#090808',
    width: 168,
    height: 35,
    fontWeight: 'bold',
  },
  text:{
      fontSize: 20,
      textAlign: 'center',
      color: '#090808',
      width: 168,
      height: 35,
      fontWeight: 'bold',
 },
});

