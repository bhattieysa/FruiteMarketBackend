const mysql=require('mysql')

const pool =mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,

})
pool.getConnection((err)=>{
    if(err){
        console.log('error connection to db ', err.stack)
    }else{
        console.log("Connected to db...!")
    }
    
}) 

module.exports={pool}