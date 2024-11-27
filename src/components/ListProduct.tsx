import React, { useContext, useEffect, useState } from "react";

import { SafeAreaView, StyleSheet, Text } from "react-native";
import {
  ProductContext,
  ProductDispatchContext,
} from "@/context/ProductContext";
import ListButton from "@/components/ListButton";
import ProductCard from "@/components/ProductCard";
import {
  ProductDatabase,
  useProductDatabase,
} from "@/database/useProductDatabase";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function ListProduct() {
  const [products, setProducts] = useState<ProductDatabase[]>([]);
  const productDetails = useContext(ProductContext);
  const setProductDetails = useContext(ProductDispatchContext);

  const productDatabase = useProductDatabase();

  async function list() {
    try {
      const response = await productDatabase.list();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDetails(productId: string) {
    setProductDetails(productId)
    router.navigate(`/`);
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
      {products.length > 0 ? (
        products.map((item) => (
          <ProductCard
            key={item.id}
            itemId={item.id}
            codigo={item.codigo}
            descricao={item.descricao}
            quantidade={item.quantidade}
            valorCusto={item.valorCusto}
            valorVenda={item.valorVenda}
            onPress={() => handleDetails(item.codigo)}
          />
        ))
      ) : (
        <Text style={styles.emptyList}>Sem produtos cadastrados!</Text>
      )}
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {},
  listHeader: {},
  emptyList: { color: Colors.dark.HighlightFix, alignSelf: "center" },
});
