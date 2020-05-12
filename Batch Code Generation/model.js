const{DataTypes}=require('sequelize')
const {db}=require('./connection')

const Course= db.define('course',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(20)
    }
})
const Teacher=db.define('teacher',{
    name:{
        type:DataTypes.STRING(35),
        allowNull:false
    }
})

const Center=db.define('center',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(15),
        allowNull:false
    },
    city:{
        type:DataTypes.STRING(15),
        allowNull:false
    }
})

const Season= db.define('season',{
    id:{
        type:DataTypes.STRING(1),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(10),
        allowNull:false
    }
})

const Batch=db.define('batch',{
    code:{
        type:DataTypes.STRING(),
        primaryKey:true
    },
    year:{
        type:DataTypes.INTEGER(4)
    },
    start: DataTypes.DATE() ,
    end: DataTypes.DATE(),
})

// Associations

Batch.belongsTo(Course)
Batch.belongsTo(Center)
Batch.belongsTo(Season)

Course.hasMany(Batch)
Season.hasMany(Batch)
Center.hasMany(Batch)
module.exports={
    db,Season,Batch,Center,Course,Teacher
}
db.sync()