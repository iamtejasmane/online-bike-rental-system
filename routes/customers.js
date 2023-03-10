const express = require("express")
const { Customers } = require("../sequelize")
const utils = require("../utils")
const crypto = require("crypto-js")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const SECRET = process.env.SECRET

const router = express.Router()

router.post("/signup", (req, res) => {
  const {
    custPhoneNo,
    custEmail,
    password,
    custFirstName,
    custLastName,
    avatar,
    custLicenseNo,
    custUniqueId,
    address,
    city,
    pincode,
  } = req.body
  const encryptedPassword = crypto.SHA256(password) + ""
  return Customers.create({
    custPhoneNo: custPhoneNo,
    custEmail: custEmail,
    password: encryptedPassword,
    custFirstName: custFirstName,
    custLastName: custLastName,
    avatar: avatar,
    custLicenseNo: custLicenseNo,
    custUniqueId: custUniqueId,
    address: address,
    city: city,
    pincode: pincode,
  })
    .then((customer) => {
      res.send(utils.createResult(null, customer))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/signin", (req, res) => {
  const { email, password } = req.body
  const encryptedPassword = crypto.SHA256(password) + ""
  const result = {}

  Customers.findOne({
    where: { custEmail: email, password: encryptedPassword },
  })
    .then((customer) => {
      console.log(customer)
      const token = jwt.sign({ id: customer["custId"] }, SECRET)

      result["status"] = "success"
      result["data"] = {
        custFirstName: customer["firstName"],
        custLastName: customer["lastName"],
        token: token,
      }
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      result["status"] = "error"
      result["data"] = err
      res.send(result)
    })
})

module.exports = router
