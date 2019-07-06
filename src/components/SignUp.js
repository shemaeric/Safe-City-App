// SignUp.js
import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

import styles from "../styles/home";
import Navbar from "../components/containers/Navbar";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
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
        <Navbar name="Safe city" />
        <View style={styles.body}>
          <Navbar name="Sign Up" />
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Username..."
              autoCapitalize="none"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("username", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email..."
              autoCapitalize="none"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("email", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number..."
              autoCapitalize="none"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("phone_number", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Referee Phone Number..."
              autoCapitalize="none"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("ref_phone_number", val)}
            />
            <View style={styles.buttonSignupContainer}>
              <View style={styles.customBtn}>
                <Button
                  title="Sign Up"
                  color="black"
                  onPress={() => this.props.navigation.navigate("Validate")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
