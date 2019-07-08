import React from "react";
import { View, Button, TextInput, StyleSheet, Text, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import styles from "../styles/home";
import Navbar from "../components/containers/Navbar";
import { validate } from '../redux/action-creators/user'; 

class Validate extends React.Component {
  state = {
    code: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  validate = (code) => {
    this.props.validates(code).then(res => {
      if(res.payload.data.status === 200) {
        AsyncStorage.setItem('api_token', res.payload.data.api_token);
        this.props.navigation.navigate('Home')
      }
      return null
    })
  };

  static navigationOptions = {
    header: null
  };
  render() {
    console.log('from validate', this.props);
    const data = {
      id: this.props.regUser.data === undefined ? null : this.props.regUser.data.details.id,
      my_phone_number: this.props.regUser.data === undefined ? null : this.props.regUser.data.details.my_phone_number,
      code: this.state.code
    }
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
              onChangeText={val => this.onChangeText("verify_code", val)}
            />
            <View style={styles.buttonSignupContainer}>
              <View style={styles.customBtn}>
                <Button 
                title="Verify" 
                color="black"
                onPress={() => this.validate(data)}
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
  validated : state.validated,
  regUser : state.user.user
});

export default connect(mapStateToProps, {validates: validate})(Validate);
