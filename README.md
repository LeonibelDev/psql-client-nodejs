# nodejs-postgres-Client
## description
This is a simple client in nodeJS for make a connection with postgres

## tree / project structure
* postgres-client
  * main.js

## example

```javascript
const { Pool, Client } = require('pg')

const db = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 
})

module.exports = db
```
## author
Leonibel SR <https://github.com/LeonibelDev>