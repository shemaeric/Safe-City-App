import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import NavBar from "./containers/Navbar";
import Emergency from "../components/containers/EmButton";
import styles from "../styles/home";
import ButtonCustom from "../components/containers/Button";

export default class App extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <NavBar name="Safe city" />
        <View style={styles.body}>
          <View style={styles.emergencyContainer}>
            <Emergency />
          </View>
          <View style={styles.viewBtnContainer}>
            <View style={styles.customBtn}>
              <Button title="Fire" color="black" onPress={() => this.props.navigation.navigate("Fire")}/>
            </View>
            <View style={styles.customBtn}>
              <Button title="Abuse" color="black" />
            </View>
            <View style={styles.customBtn}>
              <Button title="Accident" color="black" />
            </View>
          </View>
          <View />
        </View>
      </View>
    );
  }
}
