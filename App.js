import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { toast } from 'react-toastify';
import HomeScreen from './src/components/home';
import SignUpScreen from './src/components/SignUp';
import Initializing from './src/components/Initializing';
import ValidateScreen from './src/components/Validate';
import Fire from './src/components/fire';
import Abuse from './src/components/abuse';
import Accident from './src/components/accident';
import { Provider } from 'react-redux';
import store from './src/redux/store';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator></AppStackNavigator>
      </Provider>
    );
  }
}

const AuthStackNavigator = createStackNavigator({
  SignUp: SignUpScreen,
  Validate: ValidateScreen
})

const ItemStackNavigation = createStackNavigator({
  Home: HomeScreen,
  Fire,
  Abuse,
  Accident
})
const TabNavigator = createMaterialTopTabNavigator({
  Fire: { screen: Fire },
  Abuse: { screen: Abuse },
  Accident: { screen: Accident }
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

