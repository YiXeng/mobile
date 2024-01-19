import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PackingSection({ section }) {

  return (
    <View style={{borderWidth: '2px', borderRadius:'20px', padding:20, margin:20}}>
      <View>
        <Text style={{display:'flex', textAlign:'center', fontSize:'20px', margin:5 }}>{section.id}</Text>
      </View>
      {Object.entries(section).map(([key, value]) => {
        if (key !== "id") {
          return (
            <View key={key}>
              <Text style={{display: 'flex', justifyContent: 'center', textAlign:'center', padding:2}}>{value}</Text>
            </View>
          );
        }
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
    borderColor: "#1f1e33",
    borderWidth: 1,
    margin: 30,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "#090808",
    width: 168,
    height: 35,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#090808",
    width: 168,
    height: 35,
    fontWeight: "bold",
  },
});
