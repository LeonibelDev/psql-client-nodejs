/*
  #CONTACT ME
  user: Leonibel SR 
  email: leonibel.ramirez@gmail.com
*/

//-----------------------------------------
// intall the module pg
// npm install -g--save pg

// require module (pg)
const { Pool, Client } = require('pg');

// declare the class for connection (pool)
const pool = new Pool({
        user: '',
        host: '',
        database: '',
        password: '',
        port: 
    });



// export the class for use from others files
module.exports = pool;