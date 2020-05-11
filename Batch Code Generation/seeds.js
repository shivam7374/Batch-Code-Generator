const{Season, Batch, Course, Teacher, Center}=require('./model')
const {db}=require('./connection')
const seed= async()=>{
    try{
        db.sync({alter:true})
        
        await Center.bulkCreate([
            {id:'PP' ,name:'Pitampura',city:'NewDelhi'},
            {id:'DW' ,name:'Dwarka',city:'NewDelhi'},
            {id:'NO' ,name:'Noida',city:'NewDelhi'},
            {id:'DD' ,name:'Dehradun',city:'Dehradun'},
            {id:'OL' ,name:'Online',city:'NewDelhi'},
        ],{
            ignoreDuplicates:true
        })
        await Season.bulkCreate([
            {id:'S' ,name:'Summer'},
            {id:'F' ,name:'Fall'},
            {id:'W' ,name:'Winter'},
            {id:'P' ,name:'Spring'},
            
        ],{
            ignoreDuplicates:true
        })
        await Course.bulkCreate([
            {id:'LP' ,name:'LaunchPad'},
            {id:'CX' ,name:'Crux'},
            {id:'IB' ,name:'Interview Bootcamp'},
            {id:'AD' ,name:'Android Development'},
            {id:'WD' ,name:'Web Development(Node Js)'},
        ],{
            ignoreDuplicates:true
        })


    }catch(e){
        console.log(e)
    }
}

seed();