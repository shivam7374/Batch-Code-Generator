const{db}=require('./connection')
const{app}=require('./server')

const start= async()=>{
    try{
        await db.sync()
        app.listen('3131',()=>{
            console.log('Server started on http://localhost:3131')
        })

    } catch(e){
        console.log(e)
    }
}

start()