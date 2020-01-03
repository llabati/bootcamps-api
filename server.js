const express = require('express')
const dotenv = require('dotenv')

// Routes
const bootcamps = require('./routes/bootcamps.js')

dotenv.config({ path: './config/config.env' })

const app = express()

// Mount routers (to reduce length of the URI on routers)
app.use('/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))