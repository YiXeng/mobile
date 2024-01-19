import { View, FlatList, Dimensions, Text } from "react-native";
import { useState } from "react";
import PackingSection from "./PackingSection";

export default function PackingList({ json }) {
  const sectionsArray = Object.keys(json).map((key) => ({
    ...json[key],
    id: key,
  }));

  return (
    <View style={{}}>
      <View style={{display: 'flex'}}>
        <Text style={{textAlign: 'center', fontSize:'30px', fontWeight:'500', padding:20}}>Packing List</Text>
      </View>
      <FlatList
        style={{paddingBottom: 80, marginBottom: 50}}
        data={sectionsArray}
        renderItem={({ item }) => <PackingSection section={item} />}
      />
    </View>
  );
}
