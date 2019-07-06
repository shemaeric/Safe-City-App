import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const home = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: windowHeight,
    display: "flex",
    backgroundColor: '#f5f7fb',
    
  },
  nav: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 15,
    marginTop: 30,
    paddingBottom: 10,
    backgroundColor: '#f5f7fb',
  },
  transform : {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    paddingTop: 150,
    alignItems: "center",
    backgroundColor: '#f5f7fb',
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
    borderWidth: 2,
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#3B89D6',
  },
  emergencyContainer: {
    justifyContent: 'center',
  },
  viewBtnContainer: {
    paddingTop: 30,
    flex: 1,
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
    flex:1,
    marginTop: 30
  },
  input: {
    width: 350,
    height: 50,
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#dee2e6',
    backgroundColor : "#FFFFFF",
  },
  buttonSignupContainer: {
    flex: 1,
    alignItems: 'center'
  },
  titleValidate: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500'
  },
  MainContainer: {
 
    flex: 1,
    backgroundColor: '#f5f7fb',
    alignItems: 'center',
 
  },
 
  cardViewStyle:{
    marginTop: 30,
    width: windowWidth / 2 + 150, 
    height: windowHeight / 3 + 20,
    backgroundColor: 'white'
  },
 
  cardView_InsideText:{
    fontSize: 20, 
    color: '#000', 
    textAlign: 'center', 
    marginTop: 50    
 
  },
  cardInput:{
    borderColor: '#dee2e6',
    borderWidth: 1,
    borderRadius: 2,
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 5,
    marginTop: 10,
  },
  inputWrap: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  labelInput: {
    paddingTop: 10,
    fontSize: 15
  },
  TextInputStyleClass:{
    marginTop: 10,
    paddingLeft: 5,
    textAlign: 'left',
    height: 50,
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 2,
    backgroundColor : "#FFFFFF",
    height: 150
     
  },
  cardImageStyle: {
    marginTop: 30,
    width: windowWidth / 2 + 150, 
    height: windowHeight / 3 - 40, 
    backgroundColor: 'white',
    alignItems: 'center'
  },
  imageStyler: {
    width:200,
    height:200, 
  },
  cardSubmit: {
    marginTop: 30,
    width: windowWidth / 2 + 150, 
    height: windowHeight / 4 - 140,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  customSubmit:{
    width: 100,
    height: 40,
    borderColor: '#3B89D6',
    borderWidth: 2,
    marginLeft: 10,
    borderRadius: 20,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 70,
    height: 70,
    justifyContent: 'center',
    left: 110,
    bottom: 120,
    borderRadius: 100,
    backgroundColor:'#3B89D6',
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    left:10,
    padding:10
  },
});

export default home;
