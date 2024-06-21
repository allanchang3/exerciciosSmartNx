const pgp = require("pg-promise")()
const { join } = require("node:path")

const db = pgp("postgres://postgres:1234@localhost/SmartNxExercise");

const filePath = join(__dirname, "create_tables.sql");
const query = new pgp.QueryFile(filePath);
db.query(query);

module.exports = db;