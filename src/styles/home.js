import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const home = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: windowHeight,
    display: "flex",
    backgroundColor: '#3B89D6'
    
  },
  nav: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 15,
    marginTop: 30,
    paddingBottom: 10,
    backgroundColor: '#3B89D6',
  },
  transform : {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    paddingTop: 150,
    alignItems: "center",
    backgroundColor: '#3B89D6',
    height: windowHeight,
  },
  emergency: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius:400,  
    backgroundColor: '#3B89D6',
    borderColor: '#DE4D4D',
    borderWidth: 2,
  },
  customBtn: {
    marginTop: 20,
    width: 100,
    height: 40,
    borderColor: '#F7F0F0',
    borderWidth: 2,
    marginLeft: 10,
    borderRadius: 20
  },
  emergencyContainer: {
    justifyContent: 'center',
  },
  viewBtnContainer: {
    paddingTop: 30,
    flex: 3,
    flexDirection: 'row',
    width: 100,
    height: 50,
    justifyContent: 'center',
  },
  footerText: {
    marginBottom: 100,
    color: 'white'
  },
  initializer: {
    flex: 1,
    justifyContent: 'center',
  },
  test: {
    backgroundColor: 'black',
    color: 'white'
  },
  form: {
    width: windowHeight / 3
  }
});

export default home;
