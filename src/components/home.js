import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, Button } from "react-native";
import NavBar from "./containers/Navbar";
import Emergency from "../components/containers/EmButton";
import styles from "../styles/home";
import ButtonCustom from '../components/containers/Button';

export default class App extends Component {
  static navigationOptions = {
    header : null
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <NavBar name='Safe city'/>
        <View style={styles.body}>
          <View style={styles.emergencyContainer}>
            <Emergency />
          </View>
          <ButtonCustom ></ButtonCustom>
          <Button title="hellos"></Button>
          <View>
        <Button title= 'helel' onPress = {() => this.props.navigation.push('Home')}>Your Safety Matters</Button>
        </View>
        </View>
      </ScrollView>
    );
  }
}
