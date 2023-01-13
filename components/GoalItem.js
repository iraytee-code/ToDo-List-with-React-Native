import { StyleSheet, View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalTextContainer}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
