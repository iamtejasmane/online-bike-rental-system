const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors('*'))
app.use(morgan('combined'))

app.listen(4000, () => {
    console.log('Servcer is running on port 4000')
})