import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './src/components/home';
import SignUpScreen from './src/components/SignUp';
import Initializing from './src/components/Initializing';

export default class App extends React.Component {
  render() {
    return (
        <AppStackNavigator></AppStackNavigator>
    );
  }
}

const check = createSwitchNavigator({
  loading: Initializing,
  Home: HomeScreen,
  SignUp: SignUpScreen
},
{
  initialRouteName: 'loading'
}
)

const AppStackNavigator = createAppContainer(check);

