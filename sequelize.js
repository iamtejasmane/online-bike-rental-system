const Sequelize = require('sequelize')

const PORT = process.env.PORT || "33090"
const HOST = process.env.HOST || "192.168.10.10"

const sequelize = new Sequelize("bike", "root", "password", {
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
    console.log("Connection established successfully".green)
  })
  .catch((error) => {
    console.log("error " + error)
  })


  sequelize.sync({ force: false }).then(() => {
  console.log("Database synced".green)
})