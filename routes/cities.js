const express = require('express')
const { Cities } = require("../sequelize")
const utils = require("../utils")
require('dotenv').config()


const router = express.Router()


// get the details of all the cities
router.get('/', (req, res) => {
    Cities.findAll().then((cities) => {
        res.send(utils.createResult(null, cities))
    }).catch((err)=>{
        res.send(utils.createResult(err, null))
    })
})

router.post('/', (req, res) => {
    const { name } = req.body
    
    Cities.create({
        name: name
    }).then((city) => {
        res.send(utils.createResult(null, city))
    }).catch((err) =>{
        res.send(utils.createResult(err, null))
    })
})

module.exports = router