import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  // Button,
  Text,
  Pressable,
  Alert
} from "react-native";
//import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const CustomButton = (props) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: "#00000050" }}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#dddddd" : props.color },
        styles.button,
        { ...props.style }
      ]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};
export default function Task() {
  const [title, setTitle] = useState("");
  const [Description, setDescripition] = useState("");

  const setTask = () => {
    //alert(title);
    if (title.length === 0) {
      // alert(title);
      alert("Warning!", "Please write your task title.");
    }
  };

  return (
    <View style={styles.body}>
      <TextInput
        value={title}
        style={styles.input}
        placeholder="Title"
        onChangeText={(value) => setTitle(value)}
      />
      <TextInput
        value={Description}
        style={styles.input}
        placeholder="Description"
        onChangeText={(value) => setDescripition(value)}
      />
      <CustomButton
        title="Save Task"
        color="#1eb900"
        onPressFunction={setTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    textAlign: "left",
    fontSize: 10,
    margin: 10,
    paddingHorizontal: 10
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    margin: 10,
    textAlign: "center"
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
    borderRadius: 5,
    margin: 10
  }
});
