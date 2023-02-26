const Sequelize = require('sequelize')
require("dotenv").config()

const PORT = process.env.PORT || "3306"
const HOST = process.env.HOST || "127.0.0.1"
const DB_NAME = process.env.DB_NAME || "bikes"
const DB_USER = process.env.DB_USER || "root"
const DB_PASSWORD = process.env.DB_PASSWORD || "manager"

const custModel = require('./models/customers')
const ownModel = require('./models/owners')
const bikeModel=require('./models/bikes')

// TODO: ownerModel
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  })

  sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully")
  })
  .catch((error) => {
    console.log("error " + error)
  })

  const Customers = custModel(sequelize, Sequelize)
  const Owners = ownModel(sequelize, Sequelize)
  const Bikes = bikeModel(sequelize, Sequelize)

  Owners.hasMany(Bikes, { foreignKey: "ownerId"})

  sequelize.sync({ force: false }).then(() => {
  console.log("Database synced")
})

module.exports = {
  Customers: Customers,
   Owners: Owners,
   Bikes: Bikes
}

