const mysql = require("mysql2");

const createDBConnection = async () => {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "data_repository",
    });
    console.log("Connection Created Successfully", db);
  } catch (error) {
    throw error;
    console.log(error);
  }
};
