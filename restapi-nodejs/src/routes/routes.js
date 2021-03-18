const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({title: 'hello world'})
})

router.get('/tickets', (req, res) => {
    res.json('list of tickets')
})

module.exports = router