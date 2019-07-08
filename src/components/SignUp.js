// SignUp.js
import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import styles from "../styles/home";
import Navbar from "../components/containers/Navbar";
import { userRegister, test } from '../redux/action-creators/user';

class SignUp extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    my_phone_number: "",
    referee_phone_number: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  componentDidMount() {
    this.props.test();
  }
  userSign = async (user) => {
    this.props.register(user).then(res => {
      if(res.payload.data.status === 400) {
        return null
      }
      this.props.navigation.navigate('Validate')
    })
  };

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Navbar name="Emergency App" />
        <View style={styles.body}>
          <Navbar name="Sign Up" />
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="First Name..."
              autoCapitalize="none"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("first_name", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name..."
              autoCapitalize="none"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("last_name", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number..."
              autoCapitalize="none"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("my_phone_number", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Referee Phone Number..."
              autoCapitalize="none"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("referee_phone_number", val)}
            />
            <View style={styles.buttonSignupContainer}>
              <View style={styles.customBtn}>
                <Button
                  title="Sign Up"
                  color="black"
                  onPress={() => this.userSign(this.state)}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  regUser : state.user.user
});

export default connect(mapStateToProps, {register: userRegister, test})(SignUp)
