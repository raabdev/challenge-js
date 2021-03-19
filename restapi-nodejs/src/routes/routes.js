const express = require('express')
const router = express.Router()
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

// routes
router.get('/', (req, res) => {
    res.send({title: 'hello world'})
})

router.get('/tickets', (req, res) => {
    const sql = 'SELECT * FROM budget'

    connection.query(sql, (error, results) => {
        if(error) throw error

        if(results.length > 0){
            res.json(results)
        } else {
            res.send('Not result')
        }
    })
})

router.get('/tickets/:id', (req, res) => {
    const {id} = req.params
    const sql = `SELECT * FROM budget WHERE id = ${id}`

    connection.query(sql, (error, result) => {
        if(error) throw error

        if(result.length > 0){
            res.json(result)
        } else {
            res.send('Not result')
        }
    })
})

router.post('/add', (req, res) => {
    
    const sql = 'INSERT INTO budget SET ?'

    const ticketObj = {
        concept: req.body.concept,
        amount: req.body.amount,
        date: req.body.date,
        type: req.body.type
    }

    connection.query(sql, ticketObj, error => {
        if (error) throw error
        res.send('ticket created!')
    })
})

router.put('/update/:id', (req, res) => {
    const {id} = req.params

    const {concept, amount, date, type} = req.body

    const sql = `UPDATE budget SET concept = '${concept}', amount = '${amount}', date = '${date}' WHERE id = ${id}`

    connection.query(sql, error => {
        if (error) throw error
        res.send('ticket updated!')
    })
})

router.delete('/delete/:id', (req, res) => {
    const {id} = req.params

    const sql = `DELETE FROM budget WHERE id = ${id}`
    
    connection.query(sql, error => {
        if (error) throw error
        res.send('ticket deleted!')
    })
})

module.exports = router