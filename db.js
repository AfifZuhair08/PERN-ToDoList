const Pool = require('Pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgresql2021",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;s