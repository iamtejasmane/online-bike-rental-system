module.exports = (sequlize, type) => {
    return sequlize.define('bikes', {
        bikeId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ownerId:type.INTEGER,
        bikeNo: type.STRING,
        bikeCompName: type.STRING,
        bikeInsuranceNo: type.STRING,
        engineCapacity: type.STRING,
        mileage: type.STRING,
        fuelTankCapacity: type.STRING,
        availability: type.boolean
        
    })
}