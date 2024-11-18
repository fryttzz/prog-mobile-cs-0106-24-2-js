import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { ProductDatabase } from "@/database/useProductDatabase";

type Props = TouchableOpacityProps & {
  itemId: number;
  codigo: string;
  descricao: string;
  quantidade: number;
  valorCusto: string;
  valorVenda: string;
};

export default function CountCard({
  codigo,
  quantidade,
  valorCusto,
  valorVenda,
  descricao,
  ...rest
}: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
      <View style={styles.row1}>
        <View style={styles.column1}>
          <View>
            <Text style={styles.prefix}>N˚:</Text>
            <Text style={styles.prefix}>Quant:</Text>
          </View>
          <View>
            <Text style={styles.numbers}>{codigo}</Text>
            <Text style={styles.numbers}>{quantidade}</Text>
          </View>
        </View>
        <View style={styles.column2}>
          <View>
            <Text style={styles.prefix}>Custo R$:</Text>
            <Text style={styles.prefix}>Venda R$:</Text>
          </View>
          <View>
            <Text style={styles.numbers}>{valorCusto}</Text>
            <Text style={styles.numbers}>{valorVenda}</Text>
          </View>
        </View>
      </View>
      <View style={styles.row2}>
        <View>
          <Text style={styles.prefix}>Descrição:</Text>
        </View>
        <View>
          <Text style={styles.numbers}>{descricao}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
