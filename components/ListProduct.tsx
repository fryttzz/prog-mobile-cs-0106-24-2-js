import React from "react";

import { StyleSheet } from "react-native";
import { ScrollView, SafeAreaView } from "react-native";

import ListButton from "@/components/ListButton";
import ProductCard from "@/components/ProductCard";

export default function ListProduct() {
  return (
    <SafeAreaView style={styles.container}>
      <ListButton
        title="Lista de Produtos"
        onPress={() => alert("Lista de Produtos")}
        expand={false}
      />
      <ScrollView style={styles.list}>
        <ProductCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {},
});
