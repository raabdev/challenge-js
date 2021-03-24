const express = require('express')
const app = express()
const cors = require('cors')


// settings
app.set('port', process.env.PORT || 3050)


// middlewares
app.use(cors())
/* app.use(morgan('dev'))
app.use(express.urlencoded({extended: true})) */
app.use(express.json())

// routes
app.use(require('./routes/routes'))
app.use(express.Router())


// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})