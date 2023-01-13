import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsListHeader}>List Of Goals....</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalTextContainer}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  appHeader: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "blue",
  },

  textInput: {
    borderColor: "#cccccc",
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    width: "70%",
    marginRight: 10,
  },
  goalsContainer: {
    flex: 5,
    paddingVertical: 20,
    width: "100%",
  },

  goalsListHeader: {
    alignItems: "center",
    fontSize: 23,
  },
  goalTextContainer: {
    backgroundColor: "blue",
    marginVertical: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "#fff",
    fontSize: 24,
    padding: 10,
  },
});
