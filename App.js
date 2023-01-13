import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setOpenModal(true);
  }

  function endAddGoalHandler() {
    setOpenModal(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addGoalContainer}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={openModal}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <View>
            <Text style={styles.goalsListHeader}>List Of Goals</Text>
          </View>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  addGoalContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  goalsContainer: {
    flex: 5,
    paddingVertical: 20,
    width: "100%",
  },

  goalsListHeader: {
    alignItems: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
