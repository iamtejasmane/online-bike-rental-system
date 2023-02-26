// copy the code from customers and make changes
const express = require('express')
const { Owners } = require("../sequelize")
const utils = require("../utils")
const crypto = require("crypto-js")
const jwt = require('jsonwebtoken')
const owners = require('../models/owners')

const router = express.Router()

router.post('/signup',(req, res)=>{
    const { ownPhoneNo, ownEmail, password, ownFirstName, ownLastName, avatar, address} = req.body
    const encryptedPassword = crypto.SHA256(password) + ""
    Owners.create({
        ownPhoneNo : ownPhoneNo,
        ownEmail : ownEmail,
        password : encryptedPassword,
        ownFirstName: ownFirstName,
        ownLastName: ownLastName,
        avatar: avatar,
        address: address
    }).then((user) => {
        res.send(utils.createResult(null, user))
    }).catch((err) =>{
        res.send(utils.createResult(err, null))
    })
})

router.post('/signin',(req, res)=>{
    const { email, password } = req.body
    const encryptedPassword = crypto.SHA256(password) + ""
    const result = {}
   
    return Owners.findOne({where : {ownEmail : email, password: encryptedPassword}}).then(owner =>{
        console.log(owner)
        const token = jwt.sign({id : owner['ownerId']}, SECRET)
        
        result['status'] = 'success'
        result['data'] = {
            ownFirstName : owner['firstName'],
            ownLastName : owner['lastName'],
            token : token
        }
        res.json(result)
    }).catch(err =>{
        console.log(err)
        result['status'] = 'error'
        result['data'] = err
        res.send(result)
    })
})

module.exports = router