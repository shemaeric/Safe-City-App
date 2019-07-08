import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  AsyncStorage
} from "react-native";
import { connect } from 'react-redux';
import { toast, ToastType } from 'react-toastify';
import NavBar from "./containers/Navbar";
import Emergency from "../components/containers/EmButton";
import styles from "../styles/home";
import ButtonCustom from "../components/containers/Button";
import { sendRequest } from '../redux/action-creators/emRequest';

class App extends Component {
  state = {
    location: null
  };
  static navigationOptions = {
    header: null
  };

  notifySuccess = (message) => {
    toast(message);
  };

  findCoordinates = async () => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        const location = JSON.stringify(position);

        await this.setState({ location });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  sendRequest = async (request) => {
    const getCoords = await this.findCoordinates()
    const api_token = await AsyncStorage.getItem('api_token');
    console.log(request);
    this.props.sendRequest(request).then(res => res.payload.status === 200 ? alert(res.payload.data.message) : alert('You need to press twice'));
    // return api_token;
  }

  render() {
    console.log('current',JSON.parse(this.state.location));
    const test = JSON.parse(this.state.location);
    const data = {
      emergency_category: 'em',
      longitude: test === null ? null : test.coords.longitude,
      latitude: test === null ? null : test.coords.latitude
    };
    return (
      <View style={styles.container}>
        <NavBar name="Emergency App" />
        <View style={styles.body}>
          <View style={styles.emergencyContainer}>
            <View style={styles.emergency}>
              <Button title="Emergency" color="white" onPress={async () => {
                const token = await AsyncStorage.getItem('api_token');
                this.sendRequest({...data, token})
              }}/>
            </View>
          </View>
          <View style={styles.viewBtnContainer}>
            <View style={styles.customBtn}>
              <Button
                title="Fire"
                color="black"
                onPress={() => this.props.navigation.navigate("Fire")}
              />
            </View>
            <View style={styles.customBtn}>
              <Button title="Abuse" 
              color="black" 
              onPress={() => this.props.navigation.navigate("Abuse")}
              />
            </View>
            <View style={styles.customBtn}>
              <Button title="Accident" 
              color="black" 
              onPress={() => this.props.navigation.navigate("Accident")}
              />
            </View>
          </View>
          <View />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  urgent : state.urgent
});

export default connect(mapStateToProps, {sendRequest})(App);
