import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    padding: 20,
    paddingTop: 40,
    // flex:1,
  },

  listContainer: {
    backgroundColor: "#4a4e69",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    // width: "90%"
  },
  timeline: {
    // justifyContent:"center",
    // textAlign:"center",
    // backgroundColor: "#4a4e69",
    color: "black",
    borderRadius: 5,
    padding: 5,
    margin: 10,
    // width: "90%",
    fontSize: 30,
    fontWeight: "bold",
  },
  OutputTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  location: {
    justifyContent: "center",
    textAlign: "center",
    // backgroundColor: "#4a4e69",
    color: "black",
    borderRadius: 5,
    paddingBottom: 5,
    marginBottom: 10,
    // width: "90%",
    fontSize: 20,
    // fontWeight: "bold"
  },
  outputcomponent: {
    padding: 20,
    borderColor: "#1f1e33",
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: "center",
    textAlign: "center",
    height: 300,

  },
  button: {
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    // width: "90%",
    textAlign: "center",
    fontWeight:'bold',
    fontSize:20
  },
  day: {
    // backgroundColor: "#1b263b",
    color: "#1f1e33",
  
    padding: 5,
    borderRadius: 10,
    borderColor:"#1f1e33",
    borderWidth:2,
    justifyContent: "center",
   
    alignContent: "center",
    // marginVertical: 5,
    minHeight: 50,
  },
  IndividualText: {
    textAlign: "center",
    fontSize: 18,
  },
  container: {
    backgroundColor: "#778da9",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    // width: "90%"
  },
  time: {
    backgroundColor: "#415a77",
    color: "white",
    textAlign: "center",
    borderRadius: 5,
    padding: 3,
    margin: 3,
    width: "48%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ComponentTitle: {
    textAlign: "center",
    fontSize: 25,
    color: "#1f1e33",
    fontWeight: "bold",
    borderColor: '#1f1e33',
    paddingBottom: 10,
  },




  dayComponentReturn:{
    fontSize:20,
    color: "black",
    padding: 5,
    margin: 10,
    fontWeight: "bold",
  },
  dayTime: {
    color: "black",
    borderRadius: 5,
    padding: 5,
    paddingTop: 0,
    marginTop: 0,
    margin: 10,
    // width: "90%",
    fontSize: 20,
    fontWeight: "bold",
  }
});
