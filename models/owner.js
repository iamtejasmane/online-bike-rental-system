
module.exports = (sequlize, type) => {
    return sequlize.define('customers', {
        custId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        custEmail: type.STRING,
        custFirstName: type.STRING,
        custLastName: type.STRING,
        custPhoneNo: type.STRING,
        avatar: type.STRING,
        custLicenseNo: type.STRING,
        custUniqueId: type.STRING,
        address: type.STRING,
        city: type.STRING,
        pincode: type.STRING,
    })
}