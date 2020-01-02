const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const app = express()

app.get('/', (req, res) => {
    res.write('<h1>Hello there!</h1>')
    res.end()
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))