const { Pool, Client } = require('pg');

const pool = new Pool({
        user: '',
        host: '',
        database: '',
        password: '',
        port: 
    });

module.exports = pool;