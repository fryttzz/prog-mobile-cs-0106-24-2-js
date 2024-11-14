import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

import Trashcan from "../../assets/trashcan.svg";

import DefaultInput from "./DefaultInput";
import ActionButton from "./ActionButton";

export function FormProduct() {
  // async function handleSave() {
  //   if (id) {
  //     update();
  //   } else {
  //     create();
  //   }

  //   setId("")
  //   setCodigo("")
  //   setDescricao("")
  //   setQuantidade("")
  //   setValorCusto("")
  //   setValorVenda("")
  //   await list()
  // }

  return (
    <View style={styles.container}>
      <DefaultInput label="Código:" accessibilityLabel="Código" />
      <DefaultInput label="Descrição:" accessibilityLabel="Descrição" />
      <DefaultInput
        label="Quantidade:"
        accessibilityLabel="Quantidade"
        keyboardType="number-pad"
      />
      <DefaultInput
        label="Valor de Custo:"
        accessibilityLabel="Valor de Custo"
        keyboardType="number-pad"
        suffix="R$"
      />
      <DefaultInput
        label="Valor de Venda:"
        accessibilityLabel="Valor de Venda"
        keyboardType="number-pad"
        suffix="R$"
      />
      <View style={styles.actions}>
        <ActionButton
          backgroundColor={Colors.dark.buttonBackground}
          color={Colors.light.primary}
          label="LIMPAR"
          activeOpacity={0.7}
        />
        <ActionButton
          backgroundColor={Colors.dark.buttonBackground}
          color={Colors.light.primary}
          activeOpacity={0.7}
        >
          <Trashcan />
        </ActionButton>
        <ActionButton
          backgroundColor={Colors.dark.primary}
          color={Colors.dark.background}
          label="SALVAR"
          activeOpacity={0.7}
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
