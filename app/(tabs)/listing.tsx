import { StyleSheet, ScrollView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import ListProduct from "@/components/ListProduct";

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Lista de Produtos</ThemedText>
        <ListProduct />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
  },
  titleContainer: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
