import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "../../styles/home";
import { Button } from "react-native";

export default class Emergency extends Component {
  render() {
    return (
      <View style={styles.viewBtnContainer}>
        <View style={styles.customBtn}>
          <Button title="Fire" color="white" />
        </View>
        <View style={styles.customBtn}>
          <Button title="Abuse" color="white" />
        </View>
        <View style={styles.customBtn}>
          <Button title="Accident" color="white" />
        </View>
      </View>
    );
  }
}
