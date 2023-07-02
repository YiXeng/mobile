import { StyleSheet, 
    Text, 
    SafeAreaView, 
    TouchableOpacity,} from 'react-native';


const TravelHistory = ({ touchableCount }) => {
  const renderTouchable = () => {
    const touchableOpacityArray = [];
    for (let i = 0; i < touchableCount; i++) {
      touchableOpacityArray.push(
        <TouchableOpacity 
        key={i} 
        onPress={() => handleTouchablePress(i+1)}
        style={styles.historyContainer}>
          <Text style = {styles.historyText}>Your travel history {i+1}</Text>
        </TouchableOpacity>
      );
    }
    return touchableOpacityArray;
  };

  const handleTouchablePress = (identifier) => {
    console.log(`Touchable ${identifier} pressed!`);
    // 执行你希望的Touchable点击事件处理逻辑
  };

  return (
    <SafeAreaView>
      {renderTouchable()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    historyContainer:{
        height: 70,
        width: 300,
        marginVertical: 15,
        backgroundColor: '#5d57ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    historyText:{
        color:'#fff',
        fontSize: 25,
    }
})

export default TravelHistory;