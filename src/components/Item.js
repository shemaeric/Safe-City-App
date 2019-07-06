import React from "react";
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
  TouchableOpacity
} from "react-native";
import CardView from "react-native-cardview";

export default function Item() {
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
            placeholder = "input title"
            placeholderTextColor={"#9E9E9E"}
        ></TextInput>
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
          />
        </View>
      </CardView>

      <CardView
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={5}
        style={styles.cardImageStyle}
      >
        <View style={styles.inputWrap}>
        <Image
            style={styles.imageStyler}
          source={{uri: 'https://www.shareicon.net/data/128x128/2017/05/24/886427_camera_512x512.png'}}
        />
        </View>
      </CardView>

      <CardView
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={5}
        style={styles.cardSubmit}
      >
        <View style={styles.inputWrap}>
        <View style={styles.customSubmit}>
          <Button title="Submit" color="#3B89D6" />
        </View>
        </View>
      </CardView>
      <View style={styles.MainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
                uri:'https://www.shareicon.net/data/128x128/2016/03/31/742244_phone_512x512.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
