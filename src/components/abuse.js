import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styles from "../styles/home";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import CardView from "react-native-cardview";
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { sendRequest } from '../redux/action-creators/emRequest';


class Abuse extends Component {

  state = {
    location: null,
    attached_file : '',
    emergency_title: '',
    description_of_attached_file: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  findCoordinates = async () => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        const location = await JSON.stringify(position);

        await this.setState({ location });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  handleImageChoose = async () => {
    const options = {}
    ImagePicker.showImagePicker(options, response => {
      this.setState({attached_file: 'http://www.minddisorders.com/photos/abuse-946.jpg'})
      // console.log('response', response);
    })
  }

  sendRequest = async (request) => {
    const getCoords = await this.findCoordinates()
    const api_token = await AsyncStorage.getItem('api_token');
    console.log(request);
    this.props.sendRequest(request).then(res => res.payload.status === 200 ? alert(res.payload.data.message) : alert('You need to press twice'));
  }


  render() {
    console.log(this.state);
    console.log('current',JSON.parse(this.state.location));
    const test = JSON.parse(this.state.location);
    const data = {
      emergency_category: 'ab',
      longitude: test === null ? null : test.coords.longitude,
      latitude: test === null ? null : test.coords.latitude
    };

    const newState = {
      attached_file: this.state.attached_file,
      emergency_title: this.state.emergency_title,
      description_of_attached_file: this.state.description_of_attached_file
    }
    return (
      <View style={styles.MainContainer}>
        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles.cardViewStyle}
        >
          <View style={styles.inputWrap}>
            <Text style={styles.labelInput}>Title</Text>
            <TextInput
              style={styles.cardInput}
              placeholder="input title"
              placeholderTextColor={"#9E9E9E"}
              onChangeText={val => this.onChangeText("emergency_title", val)}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.labelInput}>Description</Text>
            <TextInput
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Add the Description of Emergency"}
              placeholderTextColor={"#9E9E9E"}
              numberOfLines={10}
              multiline={true}
              onChangeText={val => this.onChangeText("description_of_attached_file", val)}
            />
          </View>
        </CardView>

        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles.cardImageStyle}
        >
          <Button style={styles.inputWrap} 
          title="choose photo"
          onPress={this.handleImageChoose}
          >
            <Image
              style={styles.imageStyler}
              source={{
                uri:
                  "https://www.shareicon.net/data/128x128/2017/05/24/886427_camera_512x512.png"
              }}
            />
          </Button>
        </CardView>

        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles.cardSubmit}
        >
          <View style={styles.inputWrap}>
            <View style={styles.customSubmit}>
              <Button title="Submit" color="#3B89D6" onPress={async () => {
                const token = await AsyncStorage.getItem('api_token');
                this.sendRequest({...data, ...newState,token})
              }}/>
            </View>
          </View>
        </CardView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  urgent : state.urgent
});

export default connect(mapStateToProps, {sendRequest})(Abuse);
