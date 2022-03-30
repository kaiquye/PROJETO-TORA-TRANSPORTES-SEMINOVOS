const knex = require('knex')({
    client : 'mysql', 
    connection : {
        host : 'localhost', 
        user : 'root',
        password : '1234', 
        database : 'SEMI_NOVOS_TORA'
    }
})
module.exports = knex