import { useSQLiteContext } from "expo-sqlite";

export type ProductDatabase = {
  id: number;
  codigo: string;
  descricao: string;
  quantidade: number;
  valorCusto: number;
  valorVenda: number;
};

export function useProductDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<ProductDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSET INTO produtos (codigo, descricao, quantidade, valorCusto, valorVenda) VALUES ($codigo, $descricao, $quantidade, $valorCusto, $valorVenda)"
    );

    try {
      const result = await statement.executeAsync({
        $codigo: data.codigo,
        $descricao: data.descricao,
        $quantidade: data.quantidade,
        $valorCusto: data.valorCusto,
        $valorVenda: data.valorVenda,
      });

      const insertedRowId = result.lastInsertRowId.toLocaleString();

      return { insertedRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function searchByCod(codigo: string) {
    try {
      const query = "SELECT * FROM produtos WHERE name LIKE ?";

      const response = await database.getAllAsync<ProductDatabase>(
        query,
        `%${codigo}%`
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function update(data: ProductDatabase) {
    const statement = await database.prepareAsync(
      "UPDATE produtos SET codigo = $codigo, descricao = $descricao, quantidade = $quantidade, valorCusto = $valorCusto, valorVenda = $valorVenda WHERE id = $id"
    );

    try {
      const result = await statement.executeAsync({
        $id: data.id,
        $codigo: data.codigo,
        $descricao: data.descricao,
        $quantidade: data.quantidade,
        $valorCusto: data.valorCusto,
        $valorVenda: data.valorVenda,
      });
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  return { create, searchByCod, update };
}