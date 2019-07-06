import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import HomeScreen from './src/components/home';
import SignUpScreen from './src/components/SignUp';
import Initializing from './src/components/Initializing';
import ValidateScreen from './src/components/Validate';
import Item from './src/components/Item';

export default class App extends React.Component {
  render() {
    return (
        <AppStackNavigator></AppStackNavigator>
    );
  }
}

const AuthStackNavigator = createStackNavigator({
  SignUp: SignUpScreen,
  Validate: ValidateScreen
})

const ItemStackNavigation = createStackNavigator({
  Home: HomeScreen,
  Item
})
const TabNavigator = createMaterialTopTabNavigator({
  Fire: { screen: Item },
  Abuse: { screen: Item },
  Accident: { screen: Item }
},{tabBarOptions: {
  labelStyle: {
    fontSize: 13,
    fontWeight: 600,
    color: 'white',
    paddingTop: 8
  },
  tabStyle: {
    width: 100,
    marginTop: 17,
    backgroundColor: '#3B89D6',
    marginLeft: 15
  },
  style: {
    backgroundColor: '#3B89D6',
  },
}} )
const check = createSwitchNavigator({
  TabNavigator,
  loading: Initializing,
  Auth: AuthStackNavigator,
  ItemStackNavigation,
},
{
  initialRouteName: 'loading'
}
)

const AppStackNavigator = createAppContainer(check);

