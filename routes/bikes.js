const express = require("express")
const { Bikes } = require("../sequelize")
const utils = require("../utils")

const router = express.Router()

// get the details of all the bikes
router.get("/", (req, res) => {
  Bikes.findAll()
    .then((bikes) => {
      res.send(utils.createResult(null, bikes))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

// get a bike by its city ID
router.get("/:id", (req, res) => {
  Bikes.findOne({ where: { cityId: req.params.id } })
    .then((bike) => {
      res.send(utils.createResult(null, bike))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

// create bike api
router.post("/", (req, res) => {
  const {
    bikeNo,
    bikeCompName,
    bikeModelName,
    bikeInsuranceNo,
    engineCapacity,
    mileage,
    fuelTankCapacity,
    availability,
  } = req.body

  Bikes.create({
    bikeNo: bikeNo,
    bikeCompName: bikeCompName,
    bikeModelName: bikeModelName,
    bikeInsuranceNo: bikeInsuranceNo,
    engineCapacity: engineCapacity,
    mileage: mileage,
    fuelTankCapacity: fuelTankCapacity,
    availability: availability,
  })
    .then((bikes) => {
      res.send(utils.createResult(null, bikes))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.put("/:id", (req, res) => {
  Bikes.findByPk(req.params.id)
    .then((bike) => {
      bike.update(req.body)
    })
    .then((bike) => {
      res.send(utils.createResult(null, bike))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

// delete a bike by its ID
router.delete("/:id", (req, res) => {
  User.findByPk(req.params.id)
    .then((bike) => {
      bike.destroy()
    })
    .then((bikes) => {
      res.send(utils.createResult(null, bikes))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
