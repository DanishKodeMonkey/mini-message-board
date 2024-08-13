const { Pool } = require('pg');
require('dotenv').config();

/* For local */
module.exports = new Pool({
    host: `${process.env.db_host}`, // address to database host
    user: `${process.env.db_user}`, // db username
    database: `${process.env.db_database}`, // database name
    password: `${process.env.db_password}`, // password
    port: `${process.env.db_port}`, // default db port
});
