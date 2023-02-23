const Sequelize = require('sequelize')

const PORT = process.env.PORT || "3306"
const HOST = process.env.HOST || "127.0.0.1"

const custModel = require('./models/customers')
const ownModel = require('./models/owners')
// TODO: ownerModel
const sequelize = new Sequelize("bikes", "root", "manager", {
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
  // TODO: same

  sequelize.sync({ force: false }).then(() => {
  console.log("Database synced")
})

module.exports = {
  Customers: Customers,
  // todo: owner
   Owners: Owners
}

