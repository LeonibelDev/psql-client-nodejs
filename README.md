# nodejs-postgres-Client
## description
This is a simple client in nodeJS for make a connection with postgres

## tree / project structure
* postgres-client
  * main.js

## example

```javascript
> conn.js

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
## require in other file

```javascript
> query.js

let { db } = require('./conn.js')

(async()=>{
    await db.query('SELECT * FROM mydatabase;')
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
})()
```


## author
Leonibel SR <https://github.com/LeonibelDev>