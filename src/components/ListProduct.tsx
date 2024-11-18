import React, { ReactEventHandler, useEffect, useState } from "react";

import { GestureResponderEvent, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

import ListButton from "@/components/ListButton";
import ProductCard from "@/components/ProductCard";
import {
  ProductDatabase,
  useProductDatabase,
} from "@/database/useProductDatabase";

export default function ListProduct() {
  const [products, setProducts] = useState<ProductDatabase[]>([]);

  const productDatabase = useProductDatabase();

  async function list() {
    try {
      const response = await productDatabase.list();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDetails(itemId: number) {
    console.log(itemId);
  }

  useEffect(() => {
    list();
  });

  return (
    <SafeAreaView style={styles.container}>
      <ListButton
        title="Lista de Produtos"
        onPress={() => alert("Lista de Produtos")}
        expand={false}
        style={styles.listHeader}
      />
      {products.map((item) => (
        <ProductCard
          key={item.id}
          itemId={item.id}
          codigo={item.codigo}
          descricao={item.descricao}
          quantidade={item.quantidade}
          valorCusto={item.valorCusto}
          valorVenda={item.valorVenda}
          onPress={() => handleDetails(item.id)}
        />
      ))}
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {},
  listHeader: {},
});
