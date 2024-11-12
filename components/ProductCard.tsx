import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Calendar from "@/assets/calendar.svg";
import { Colors } from "@/constants/Colors";

export default function CountCard() {
  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        <View>
          <Text style={styles.numbers}>58</Text>
          <Text style={styles.numbers}>125</Text>
        </View>
        <View>
          <Text style={styles.suffix}>N˚</Text>
          <Text style={styles.suffix}>mg/dl</Text>
        </View>
      </View>
      <View style={styles.column2}>
        <Calendar />
        <View>
          <Text style={styles.numbers}>24/01</Text>
          <Text style={styles.numbers}>22:00</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    borderBottomColor: Colors.dark.listBorder,
    borderBottomWidth: 1,
  },
  column1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
  },
  numbers: {
    color: Colors.dark.primary,
    fontSize: 14,
    letterSpacing: 0.1,
  },
  suffix: {
    color: Colors.dark.textSuffix,
    fontSize: 14,
    letterSpacing: 0.1,
  },
  column2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
    alignItems: "center",
  },
});
