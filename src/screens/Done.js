import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Task from "../screens/Task";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  TextInput,
  SectionList,
  Image
} from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Items = [
  {
    name: "Item 1",
    des: ["Item 1-1", "Item 1-2", "Item 1-3"],
    image: require("../Assets/checklist.png"),
    image1: require("../Assets/greaterthan.png")
  },
  {
    name: "Item 2",
    des: ["Item 2-1", "Item 1-2", "Item 1-3"],
    image: require("../Assets/checklist.png"),
    image1: require("../Assets/greaterthan.png")
  }
];
export default function DemoVideo() {
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image style={styles.logo1} source={item.image} />
          <View>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.text}>{item.des}</Text>
          </View>
          <Image style={styles.gretaer} source={item.image1} />
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
          </View>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  inputContainer: {
    //padding: 0,
    //flexDirection: "row",
    //width: 20
    paddingRight: 50
  },
  input: {
    marginTop: 50,
    paddingRight: 30,
    //marginLeft:0,
    height: 2,
    //width:400,
    //fontSize: 12,
    borderWidth: 1,
    borderColor: "#B0B0B0"
  },
  gretaer: {
    width: 20,
    marginLeft: 80,
    marginTop: 25,
    height: 20
  },
  logo1: {
    height: 40,
    width: 40,
    alignItems: "stretch",
    marginLeft: 10,
    marginTop: 15
  },
  itemContainer: {
    width: 300,
    height: 70,
    backgroundColor: "#0",
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 15,
    flexDirection: "row"
  },
  item: {
    margin: 10,
    fontWeight: "bold"
    //justifyContent: "center",
    // alignItems: "center"
  },
  text: {
    marginLeft: 10,
    color: "#000ff",
    fontSize: 10
  }
});
