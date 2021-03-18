const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

// settings
app.set('port', process.env.PORT || 3000)

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

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routes
app.use(require('./routes/routes'))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})