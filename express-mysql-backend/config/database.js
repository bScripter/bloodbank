require("dotenv").config();
const { createPool } = require("mysql")

const pool = createPool({
    port:process.env.db_port,
    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_password,
    database:process.env.mysql_db,
})

module.exports = pool;

