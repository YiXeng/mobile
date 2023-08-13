import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper:{
    justifyContent:"center",
    padding: 20,
    paddingTop:40,
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
    justifyContent:"center",
    textAlign:"center",
    backgroundColor: "#4a4e69",
    color: "white",
    borderRadius: 5,
    padding: 5,
    margin: 10,
    // width: "90%",
    fontSize: 16,
    fontWeight: "bold"
    
  },
  button: {
    backgroundColor: "#4a4e69",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    // width: "90%",
    textAlign: "center"
  },
  day: {
    backgroundColor: "#1b263b",
    color: "white",
    fontSize: 14,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 5
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
    width: "48%"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});