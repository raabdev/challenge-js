const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const multer = require('multer');
const upload = multer();

// settings
app.set('port', process.env.PORT || 3050)


// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(upload.none())

// routes
app.use(require('./routes/routes'))
app.use(express.Router())

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})