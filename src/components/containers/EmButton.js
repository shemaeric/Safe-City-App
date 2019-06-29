import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "../../styles/home";
import { Button } from "react-native";

export default class ButtonCustom extends Component {
  render() {
    return (
      <View style= {styles.emergency}>
        <Button title="Emergency" color='white'/>
      </View>
    );
  }
}
