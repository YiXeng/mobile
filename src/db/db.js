import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("History.db");

const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS HistoryData (id INTEGER PRIMARY KEY AUTOINCREMENT, json_data TEXT);",
      [],
      () => console.log("HistoryData table created successfully"),
      (_, error) => console.log("Error creating HistoryData table:", error)
    );
  });
};

const insertJsonData = (jsonData) => {
  const jsonString = JSON.stringify(jsonData);

  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO HistoryData (json_data) VALUES (?);",
        [jsonString],
        (_, { insertId }) => resolve(insertId),
        (_, error) => reject(error)
      );
    });
  });
};

const deleteAllHistoryData = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM HistoryData;",
      [],
      () => console.log("All data deleted successfully"),
      (_, error) => console.log("Error deleting data:", error)
    );
  });
};

const dropHistoryDataTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DROP TABLE IF EXISTS HistoryData;",
      [],
      () => console.log("HistoryData table dropped successfully"),
      (_, error) => console.log("Error dropping HistoryData table:", error)
    );
  });
};

const fetchJsonData = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT json_data FROM HistoryData WHERE id = ?;",
        [id],
        (_, { rows }) => {
          if (rows.length > 0) {
            const data = JSON.parse(rows.item(0).json_data);
            resolve(data);
          } else {
            resolve(null);
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};

const fetchAllHistoryData = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM HistoryData;",
        [],
        (_, { rows }) => resolve(rows._array), 
        (_, error) => reject(error)
      );
    });
  });
};

createTable();

export {
  db,
  insertJsonData,
  dropHistoryDataTable,
  fetchJsonData,
  deleteAllHistoryData,
  fetchAllHistoryData,
};