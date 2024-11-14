import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Colors } from "@/constants/Colors";

export default function CountCard() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.column1}>
          <View>
            <Text style={styles.prefix}>N˚:</Text>
            <Text style={styles.prefix}>Quant:</Text>
          </View>
          <View>
            <Text style={styles.numbers}>#4658</Text>
            <Text style={styles.numbers}>1000</Text>
          </View>
        </View>
        <View style={styles.column2}>
          <View>
            <Text style={styles.prefix}>Custo R$:</Text>
            <Text style={styles.prefix}>Venda R$:</Text>
          </View>
          <View>
            <Text style={styles.numbers}>R$ 10,00</Text>
            <Text style={styles.numbers}>R$ 10,00</Text>
          </View>
        </View>
      </View>
      <View style={styles.row2}>
        <View>
          <Text style={styles.prefix}>Descrição:</Text>
        </View>
        <View>
          <Text style={styles.numbers}>Placa de video</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 65,
    borderBottomColor: Colors.dark.listBorder,
    borderBottomWidth: 1,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column1: {
    flexDirection: "row",
    alignItems: "center",
  },
  column2: {
    flexDirection: "row",
    alignItems: "center",
  },
  numbers: {
    color: Colors.dark.primary,
    fontSize: 14,
    letterSpacing: 0.1,
  },
  prefix: {
    color: Colors.dark.HighlightFix,
    fontSize: 14,
    letterSpacing: 0.1,
  },
  quant: {},
});
