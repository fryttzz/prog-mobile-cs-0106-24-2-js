import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Alert, StyleSheet, View } from "react-native";

import Trashcan from "../../assets/trashcan.svg";

import DefaultInput from "./DefaultInput";
import ActionButton from "./ActionButton";
import { useProductDatabase } from "@/database/useProductDatabase";
import { useLocalSearchParams } from "expo-router";

export function FormProduct() {
  const [id, setId] = useState("");
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valorCusto, setValorCusto] = useState("");
  const [valorVenda, setValorVenda] = useState("");

  const { productId } = useLocalSearchParams();

  const productDatabase = useProductDatabase();

  async function create() {
    try {
      if (isNaN(Number(quantidade))) {
        return Alert.alert("Quantidade", "A quantidade precisa ser um número!");
      }

      const response = await productDatabase.create({
        codigo,
        descricao,
        quantidade: Number(quantidade),
        valorCusto,
        valorVenda,
      });

      Alert.alert("Produto cadastrado com o ID: " + response.insertedRowId);
    } catch (error) {
      console.log(error);
    }
  }

  async function update() {
    try {
      if (isNaN(Number(quantidade))) {
        return Alert.alert("Quantidade", "A quantidade precisa ser um número!");
      }

      const response = await productDatabase.update({
        id: Number(id),
        codigo,
        descricao,
        quantidade: Number(quantidade),
        valorCusto,
        valorVenda,
      });

      Alert.alert("Produto atualizado!");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSave() {
    if (id) {
      update();
    } else {
      create();
    }

    handleClear();
    // await list()
  }

  async function handleDelete() {
    // if (id) {
    //   productContext.delete(id);
    // }
    // handleClear();
  }

  async function handleProduct(productId: string | string[]) {
    try {
      const response = await productDatabase.getProductById(String(productId));
      if (response != null) {

        setId(String(response.id));
        setCodigo(response.codigo);
        setDescricao(response.descricao);
        setQuantidade(String(response.quantidade));
        setValorCusto(response.valorCusto);
        setValorVenda(response.valorVenda);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClear() {
    setId("");
    setCodigo("");
    setDescricao("");
    setQuantidade("");
    setValorCusto("");
    setValorVenda("");
  }

  useEffect(() => {
    if (productId) {
      handleProduct(productId);
    }
  }, [productId]);

  return (
    <View style={styles.container}>
      <DefaultInput
        label="Código:"
        accessibilityLabel="Código"
        onChangeText={setCodigo}
        value={codigo}
      />
      <DefaultInput
        label="Descrição:"
        accessibilityLabel="Descrição"
        onChangeText={setDescricao}
        value={descricao}
      />
      <DefaultInput
        label="Quantidade:"
        accessibilityLabel="Quantidade"
        keyboardType="number-pad"
        onChangeText={setQuantidade}
        value={quantidade}
      />
      <DefaultInput
        label="Valor de Custo:"
        accessibilityLabel="Valor de Custo"
        keyboardType="number-pad"
        suffix="R$"
        onChangeText={setValorCusto}
        value={valorCusto}
      />
      <DefaultInput
        label="Valor de Venda:"
        accessibilityLabel="Valor de Venda"
        keyboardType="number-pad"
        suffix="R$"
        onChangeText={setValorVenda}
        value={valorVenda}
      />
      <View style={styles.actions}>
        <ActionButton
          backgroundColor={Colors.dark.buttonBackground}
          color={Colors.light.primary}
          label="LIMPAR"
          activeOpacity={0.7}
          onPress={() => handleClear()}
        />
        <ActionButton
          backgroundColor={Colors.dark.buttonBackground}
          color={Colors.light.primary}
          activeOpacity={0.7}
          onPress={() => handleDelete()}
        >
          <Trashcan />
        </ActionButton>
        <ActionButton
          backgroundColor={Colors.dark.primary}
          color={Colors.dark.background}
          label="SALVAR"
          activeOpacity={0.7}
          onPress={() => handleSave()}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});
