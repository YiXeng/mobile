import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Auth from "../components/Auth";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})

const SignInScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Sign in with Google:</Text>
            <Auth navigation={navigation} />
            <StatusBar style="auto" />
        </View>
    )
}

export default SignInScreen;


