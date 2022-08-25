import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { setTasks, setTaskId } from "../redux/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

export default function ToDo({ navigation }) {
  const { tasks } = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();

  const getTasks = () => {
    AsyncStorage.getItem("Tasks")
      .then((tasks) => {
        const parsedTasks = JSON.parse(tasks);
        if (parsedTasks && typeof parsedTasks === "object") {
          dispatch(setTasks(parsedTasks));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Tasks");
        }}
      >
        <FontAwesome5 name={"plus"} size={20} color={"#ffffff"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  button: {
    width: 60,
    height: 60,
    JustifyContent: "center",
    textAlign: "center",
    borderRadius: 30,
    bottom: 10,
    right: 10,
    backgroundColor: "#0000ff",
    position: "absolute",
    elevation: 5
  }
});
