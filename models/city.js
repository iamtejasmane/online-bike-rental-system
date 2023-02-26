module.exports = (sequelize , type)=>{
    return sequelize.define('cities',{
        id:{
            type : type.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : type.STRING,
    })
}