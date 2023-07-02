import { StyleSheet, 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    ScrollView,
    View,} from 'react-native'
import Constants from 'expo-constants'
import TravelHistory from '../components/TravelHistory';


const MainScreen = (props) => {
    // const plan = props.travelPlan;
    const plan = 5;
    return (
        <SafeAreaView style = {styles.background}>
            <TouchableOpacity 
                onPress={()=>{
                    console.log('User input Page');
                }}
                style={styles.buttonContainer}
            >
                <Text style = {styles.buttonText}>Create a new Travel Plan</Text>
            </TouchableOpacity>

            <View style={styles.historyContainer}>
                <Text style = {styles.historyText}>History</Text>
                <ScrollView>
                    <TravelHistory touchableCount ={plan}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background:{
        marginTop: Constants.statusBarHeight,

    },
    buttonContainer: {
        height: 60,
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: '#5d57ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    historyContainer:{
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5d57ff',
        borderRadius: 8,
        borderWidth: 4,
       
    },
    buttonText:{
         color:'#fff',
         fontSize: 25,
    },
    historyText:{
        color:'#5d57ff',
        fontSize: 25,
        marginVertical: 15,
   }

})

export default MainScreen;