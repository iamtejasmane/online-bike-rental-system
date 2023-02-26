module.exports = (sequlize, type) => {
    return sequlize.define('owners', {
        ownerId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ownEmail: type.STRING,
        password: type.STRING,
        ownFirstName: type.STRING,
        ownLastName: type.STRING,
        ownPhoneNo: type.STRING,
        avatar: type.STRING,
    })
}