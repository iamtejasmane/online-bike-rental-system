// copy the code from customers and make changes
const express = require("express")
const { Owners } = require("../sequelize")
const utils = require("../utils")
const crypto = require("crypto-js")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/signup", (req, res) => {
  const {
    ownPhoneNo,
    ownEmail,
    password,
    ownFirstName,
    ownLastName,
    avatar,
    address,
  } = req.body
  const encryptedPassword = crypto.SHA256(password) + ""
  Owners.create({
    ownPhoneNo: ownPhoneNo,
    ownEmail: ownEmail,
    password: encryptedPassword,
    ownFirstName: ownFirstName,
    ownLastName: ownLastName,
    avatar: avatar,
    address: address,
  })
    .then((user) => {
      res.send(utils.createResult(null, user))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
