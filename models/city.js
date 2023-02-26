module.exports = (sequelize , type)=>{
    return sequelize.define('cities',{
        cityId:{
            type : type.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : type.STRING,
    })
}