import { StyleSheet, 
    Text, 
    ImageBackground,
    SafeAreaView, 
    Dimensions,
    TouchableOpacity,} from 'react-native';

const TravelHistory = ({ touchableCount, navigation }) => {

  const getRandomDate = () => {
    // Generate a random month (0-11) and day (1-31)
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 31) + 1;

    // Define an array of month names
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get the month name based on the random month
    const monthName = months[randomMonth];

    // Format the date as "Month Day"
    const formattedDate = `${monthName} ${randomDay}`;

    // Display the formatted date
    return formattedDate;
  };

  const renderTouchable = () => {

    const touchableOpacityArray = [];

    for (let i = 0; i < touchableCount; i++) {
      image = 'https://picsum.photos/200/300'
      touchableOpacityArray.push(


        <TouchableOpacity 
        key={i} 
        onPress={() => handleTouchablePress(i+1)}
        style={styles.historyContainer}>
        
          <ImageBackground
          source={{ uri: image }}
          style={styles.imageContainer}
          resizeMode="cover">
            <Text style = {styles.dateText}>{getRandomDate()}</Text>
          </ImageBackground>

        </TouchableOpacity>
        


      );
    }
    return touchableOpacityArray;
  };

  const handleTouchablePress = (identifier) => {
    console.log(`Touchable ${identifier} pressed!`);
    navigation.navigate("output", {key: identifier.toString()});
    // 执行你希望的Touchable点击事件处理逻辑
  };

  return (
    <SafeAreaView>
      {renderTouchable()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    imageContainer:{
        height: 160,
        width: (Dimensions.get('window').width - 50),
        marginVertical: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    dateText:{
      fontSize: 24,
      color: 'white',
      marginLeft: 30,
      marginTop: 110,
      fontWeight: 'bold'
  },
})

export default TravelHistory;