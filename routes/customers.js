const express = require('express')
const { Customers } = require("../sequelize")
const utils = require("../utils")
const crypto = require("crypto-js")
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/signup',(req, res)=>{
    const { custPhoneNo, custEmail, password, custFirstName, custLastName, avatar, custLicenseNo, custUniqueId, address, city, pincode} = req.body
    const encryptedPassword = crypto.SHA256(password) + ""
    return Customers.create({
        custPhoneNo : custPhoneNo,
        custEmail : custEmail,
        password : encryptedPassword,
        custFirstName: custFirstName,
        custLastName: custLastName,
        avatar: avatar,
        custLicenseNo: custLicenseNo,
        custUniqueId: custUniqueId,
        address: address,
        city: city,
        pincode: pincode
    }).then((user) => {
        res.send(utils.createResult(null, user))
    }).catch((err) =>{
        res.send(utils.createResult(err, null))
    })
})

module.exports = router