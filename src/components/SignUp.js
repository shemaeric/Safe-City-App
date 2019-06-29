import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import styles from "../styles/home";
import Navbar from '../components/containers/Navbar';

export default class SignUp extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Navbar name='Sign Up'></Navbar>
          <View style={styles.form}>
          <TextInput ref="name" style={styles.test}></TextInput>
          </View>
        </View>
      </View>
    );
  }
}
