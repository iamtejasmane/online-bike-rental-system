module.exports = (sequelize, type) => {
  return sequelize.define("bookings", {
    bookingsId: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bikeId: type.INTEGER,
    custId: type.INTEGER,
    pickup_date: type.DATE,
    drop_date: type.DATE,
    amount_paid: type.DECIMAL,
    cancel_date: type.DATE,
    status: {
      //status 1: Booked , 2: Canceled
      type: type.INTEGER,
      defaultValue: 1,
    },
  })
}
