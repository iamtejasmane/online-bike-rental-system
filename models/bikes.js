module.exports = (sequlize, type) => {
  return sequlize.define("bikes", {
    bikeId: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ownerId: type.INTEGER,
    bikeNo: type.STRING,
    bikeCompName: type.STRING,
    bikeModelName: type.STRING,
    bikeInsuranceNo: type.STRING,
    engineCapacity: type.STRING,
    mileage: type.STRING,
    fuelTankCapacity: type.STRING,
    availability: type.BOOLEAN,
    price_per_day: type.DECIMAL,
  })
}
