const { Pool } = require("pg");
//const {pool} = pg;

const db = new Pool({
    host: "localhost",
    user: "acil",
    database: "db_baru",
    password: "123",
    port: "5432",
});

module.exports = db;
