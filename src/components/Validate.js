import React from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";

import styles from "../styles/home";
import Navbar from "../components/containers/Navbar";

export default class Validate extends React.Component {
  state = {
    code: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Navbar name="safe city"></Navbar>
        <View style={styles.body}>
          <Text style={styles.titleValidate}>Validate Phone Number</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Code..."
              autoCapitalize="none"
              placeholder={"Add the verification code"}
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("code", val)}
            />
            <View style={styles.buttonSignupContainer}>
              <View style={styles.customBtn}>
                <Button 
                title="Verify" 
                color="black"
                onPress={() => this.props.navigation.navigate("Home")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
