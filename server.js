// dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection

// port
const PORT = process.env.PORT || 3000

// database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'herokuTest'

// connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

// Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
