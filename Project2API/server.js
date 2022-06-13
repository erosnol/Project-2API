const express = require('express')
require('dotenv').config() // init dotenv
const morgan = require('morgan')
const helmet = require('helmet')

const mongoConfig = require('./config/mongoConfig')
const todosRouter = require('./routes/todosRouter')
const usersRouter = require('./routes/usersRouters')
const authRouter = require('./routes/authRouter')

const app = express()
const PORT = 4001

app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

//* Routers
app.use('/todos', todosRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

//* Root route for the APP
app.get('/', (req, res) => {
    res.status(200).json("Welcome to my API!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})