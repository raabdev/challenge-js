const mysql = require('mysql')

// mysql
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Roi419021?',
    database: 'budgets'
})

// check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!')
})

module.exports = connection