import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from '../../styles/home';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style= {styles.nav}>
        <Text style= {styles.transform}>{this.props.name}</Text>
      </View>
    );
  }
}

