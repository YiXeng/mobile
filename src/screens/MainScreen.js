import { StyleSheet, 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    ScrollView,
    Image,
    ImageBackground,
    View,} from 'react-native'
import Constants from 'expo-constants'
import TravelHistory from '../components/TravelHistory'
import DateTimeDisplay from '../components/DateTimeDisplay';

const MainScreen = ({ navigation , jsonData}) => { // Use destructuring to get the navigation prop
    
    const plan = 5;
    let content;

    if (jsonData != undefined){
        content =(
            <View>
                <Text style = {styles.textSmall} >Please create a Travel Plan first</Text>
            </View>
        );
    }else{
        content =(
                <TravelHistory touchableCount ={plan}/>
        );
    }

    return (
        <SafeAreaView style = {styles.background}>


            <SafeAreaView style={{flexDirection: 'row', marginBottom: 10}}>
                <Image source={require('../components/images/location_icon.png')}
                style={styles.locationIcon}/> 
                <Text style = {styles.locationText}>Beijing</Text> 
                <Text style = {styles.logOutText}>Log out</Text> 
            </SafeAreaView>
            <ScrollView>
                <DateTimeDisplay />

                <Text style = {styles.greetingText}> Hi David！</Text>
                <Text style = {styles.greetingText}> Are you looking for a trip?</Text>


                <ImageBackground
                source={require('../components/images/backgroundPic.png')}
                style={styles.image}>

                    <Text style = {styles.placeText}>ON, CANAD</Text>
                    <Text style = {styles.spotText}>Riverdale Hills</Text>
                    <TouchableOpacity 
                    onPress={() => {
                        console.log('User input Page');
                        navigation.navigate('input'); // Call navigate on the navigation prop
                        }}
                    style={styles.buttonContainer}>

                        <Text style = {styles.buttonText}>Get Started -></Text>
                    </TouchableOpacity>

                </ImageBackground>

                <Image source={require('../components/images/time_icon.png')}
                    style={styles.timeIcon}/> 
                    <Text style = {styles.travelText}>Travel History</Text> 
        

                <View style={styles.historyContainer}>
                    {content}
                </View>

            </ScrollView>


        </SafeAreaView>
    );
}

// ... your style definitions and export statement


const styles = StyleSheet.create({
    background:{
        marginTop: Constants.statusBarHeight,
    },

    //Contianers
    buttonContainer: {
        height: 35,
        width: 100,
        marginHorizontal: 260,
        marginTop: -20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    historyContainer:{
        marginHorizontal: 30,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //texts
    buttonText:{
        fontWeight: 'bold',
        fontSize: 12,
    },
    locationText: {
        fontSize: 14,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    logOutText:{
        fontSize: 14,
        marginVertical: 5,
        marginLeft: 220,
        fontWeight: 'bold',

    },
    greetingText:{
        fontSize: 26,
        marginVertical: 5,
        marginHorizontal: 30,
        fontWeight: 'bold',
    },
    placeText:{
        fontSize: 14,
        color: 'white',
        marginTop: 190,
        marginLeft: 20,
        
    },
    spotText:{
        fontSize: 24,
        color: 'white',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    travelText:{
        fontSize: 26,
        marginLeft: 90,
        marginTop: -35,
        fontWeight: 'bold'
    },

    //images
    locationIcon: {
        width: 28, 
        height: 28,
        marginHorizontal: 30,
        marginRight: 16,
    },
    timeIcon:{
        width: 35, 
        height: 35,
        marginHorizontal: 30,

    },
    image: {
        borderRadius: 10,
        width: 385,
        height: 270,
        marginVertical: 30,
        marginHorizontal: 22,
        overflow: 'hidden',
    },
    
});

export default MainScreen;