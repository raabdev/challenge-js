const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')


app.use(express.json())

// settings
app.set('port', process.env.PORT || 3050)


// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routes
app.use(require('./routes/routes'))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})