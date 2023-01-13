import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    checkInputField();
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function checkInputField() {
    if (enteredGoalText === "") {
      alert("Goal cannot be empty!");
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goalImage.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButtonContainer}>
            <Button title="Cancel" color="white" onPress={props.onCancel} />
          </View>
          <View style={styles.addButtonContainer}>
            <Button title="Add Goal" onPress={addGoalHandler} color="white" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311bcb",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderColor: "#e4d0ff",
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    width: "100%",
    marginRight: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  addButtonContainer: {
    margin: 10,
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: "30%",
  },
  cancelButtonContainer: {
    margin: 10,
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: "30%",
  },
});
