const { v4: uuidv4 } = require('uuid')
const { pool } = require("../../config/db")
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");



const quantity = (req, reply) => {
    const data = req.body;





    pool.query('DELETE FROM `cart` WHERE `user_id`=? AND `fruite_id`=? ',
        [
            data.user_id,
            data.fruite_id


        ], async (error, results, fields) => {
            if (error) {
                console.log(error)
                reply.send({
                    error: "true",
                    message: `Internet error...!`
                })
            }else{
     
              
                    reply.send({
                        error: "false",
                        message: `Delete Successful`,
                        
                       
                    })
                
                }
            
        })
}

module.exports = {
    quantity,
}