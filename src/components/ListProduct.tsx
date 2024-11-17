import React, { useEffect, useState } from "react";

import { StyleSheet } from "react-native";
import { SafeAreaView, FlatList } from "react-native";

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
          id={item.id}
          codigo={item.codigo}
          descricao={item.descricao}
          quantidade={item.quantidade}
          valorCusto={item.valorCusto}
          valorVenda={item.valorVenda}
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
