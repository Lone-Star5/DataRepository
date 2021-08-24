const mysql = require("mysql2");
const util = require("util");

const {
  CREATE_FACULTY_TABLE,
  CREATE_AWARDS_TABLE,
  CREATE_ACADEMIA_INDUSTRY_CONNECT_TABLE,
  CREATE_BOOK_PUBLICATIONS_TABLE,
  CREATE_CLUB_ACTIVITIES_TABLE,
  CREATE_EVENTS_ATTENDED_TABLE,
  CREATE_INDUSTRY_CONNECT_DATABASE_TABLE,
} = require("./dbTable");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
};

const seedDatabase = async function () {
  try {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    if (!connection) {
      throw new Error("Could not create connection");
    }
    const execQuery = util.promisify(connection.query.bind(connection));
    await createTable(execQuery);

    console.log("Created Tables  Successfully!");
  } catch (err) {
    console.error(err);
  }
};

const createTable = async function (execQuery) {
  try {
    await execQuery(CREATE_FACULTY_TABLE);
    await execQuery(CREATE_AWARDS_TABLE);
    await execQuery(CREATE_ACADEMIA_INDUSTRY_CONNECT_TABLE);
    await execQuery(CREATE_BOOK_PUBLICATIONS_TABLE);
    await execQuery(CREATE_CLUB_ACTIVITIES_TABLE);
    await execQuery(CREATE_EVENTS_ATTENDED_TABLE);
    await execQuery(CREATE_INDUSTRY_CONNECT_DATABASE_TABLE);
  } catch (err) {
    throw err;
  }
};

seedDatabase();
