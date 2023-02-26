const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const routeCustomer = require('./routes/customers')
const routeOwner=require('./routes/owners')
const routeCity=require('./routes/cities')
const routeBike=require('./routes/bikes')
// todo: route

const app = express()

app.use(express.json())
app.use(cors('*'))
app.use(morgan('combined'))

app.use('/customers', routeCustomer)
app.use('/owners', routeOwner)
app.use('/cities', routeCity)
app.use('/bikes', routeBike)
// todo: app.use owner

app.listen(4000, () => {
    console.log('Servcer is running on port 4000')
})