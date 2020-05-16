const express=require('express')
const path=require('path')
const app=express()
const{Course, Center, Season , Batch}=require('./model')



app.set('view engine','hbs')
app.set('views',path.resolve('./views'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/batchcode',async (req,res)=>{
    
    try {
        const centers=await Center.findAll()
        const seasons=await Season.findAll()
        const courses=await Course.findAll()
        const years=[2016,2017,2018,2019,2020,2021,2022]
        res.render('batchcode',{
            centers,seasons,courses,years
        })
        
    } catch (e) {
        console.log(e)
    }

})

app.post('/batchcode',async(req,res)=>{
    let batchcode=''
    batchcode+=req.body.course
    console.log("**************")
    console.log(req.body.course)
    console.log("**************")
    console.log("**************")
    batchcode+=req.body.center
    batchcode+=req.body.year.substr(2)
    batchcode+=req.body.season
    batchcode+=req.body.batchno
    console.log(Batch)
    console.log("************************")
    try{
        const batch=await Batch.create({
            code:batchcode,
            year:req.body.year,
            courseId:req.body.course,
            centerId:req.body.center,
            seasonId:req.body.season,
            start:Date.parse(req.body.start),
            end:Date.parse(req.body.end)
        })
        res.send(batch.code)
    }catch(e){
        console.error(e)
    }
    res.send(batchcode)
})
app.get('/batches',async (req,res)=>{
    try {
        const batches=await Batch.findAll()
        console.log(batches)
        res.render('batches',{batches})

    } catch (e) {
    console.error(e)        
    }
})

module.exports={
    app
}