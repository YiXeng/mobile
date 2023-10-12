import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateimeDisplay = () => {
    const [localDate, setLocalDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setLocalDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDate = localDate.toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 20,
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

export default DateimeDisplay;
