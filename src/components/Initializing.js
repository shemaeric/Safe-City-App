import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator, AsyncStorage} from 'react-native';
import styles from '../styles/home';

export default class Initializing extends Component {

  constructor(props) {
    super(props)
    this.loading()
  }

  loading = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken);

    this.props.navigation.navigate(userToken === null ? 'SignUp': 'Home')
  }
  render() {
    return (
      <View style= {styles.container}>
        <View style= {styles.initializer}>
          <ActivityIndicator size="large" color="#ffff" />
        </View>
      </View>
    );
  }
}

