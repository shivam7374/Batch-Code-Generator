const Sequelize= require('sequelize')
const db=new Sequelize('batchcode','cb','cbpass1',{
    host:'localhost',
    dialect:'mysql',
    logging:console.log
})
db.authenticate()
    .then(()=>{console.log("Connection Worked")})
    .catch((err)=>{console.error(err)})
module.exports={
    db
}