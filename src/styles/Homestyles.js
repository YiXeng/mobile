import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    background: {
        marginTop: Constants.statusBarHeight,
        flex: 0,
    },
    buttonContainer: {
        height: 35,
        width: 100,
        marginHorizontal: (Dimensions.get('window').width - 170),
        marginTop: -20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    historyContainer: {
        marginHorizontal: 30,
        marginTop: 10,

        justifyContent: 'center',
        alignItems: 'center',
    },
    //texts
    buttonText: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    locationText: {
        fontSize: 14,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    logOutText: {
        fontSize: 14,
        marginVertical: 5,
        left: (Dimensions.get('window').width - 250),
        fontWeight: 'bold',
    },
    greetingText: {
        fontSize: 26,
        marginVertical: 5,
        marginHorizontal: 30,
        fontWeight: 'bold',
    },
    placeText: {
        fontSize: 14,
        color: 'white',
        marginTop: 190,
        marginLeft: 20,

    },
    spotText: {
        fontSize: 24,
        color: 'white',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    travelText: {
        fontSize: 26,
        textAlign: 'center',
        marginTop: -25,
        fontWeight: 'bold'
    },

    communityIcon: {
        width: 35,
        height: 35,
        marginHorizontal: 30,


    },
    communityContainer: {
        marginHorizontal: 30,
        marginTop: 10,

        justifyContent: 'center',
        alignItems: 'center',
    },

    //images
    locationIcon: {
        width: 28,
        height: 28,
        marginHorizontal: 10,
    },
    timeIcon: {
        width: 35,
        height: 35,
        marginHorizontal: 30,


    },
    image: {
        borderRadius: 10,
        width: 385,
        height: 270,
        width: (Dimensions.get('window').width - 50),
        marginVertical: 15,
        marginHorizontal: 22,
        overflow: 'hidden',


    },

});