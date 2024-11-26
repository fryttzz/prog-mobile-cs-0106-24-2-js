import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FormProduct } from "@/components/FormProduct";
import { ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">Cadastro de Produtos</ThemedText>
        <FormProduct />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
  },
  stepContainer: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
