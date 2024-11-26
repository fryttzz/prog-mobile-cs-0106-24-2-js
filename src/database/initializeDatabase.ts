import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
            CREATE TABLE IF NOT EXISTS produtos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                codigo TEXT NOT NULL,
                descricao TEXT NOT NULL,
                quantidade REAL NOT NULL,
                valorCusto TEXT NOT NULL,
                valorVenda TEXT NOT NULL
            );
        `)
}