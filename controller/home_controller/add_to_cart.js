const { v4: uuidv4 } = require('uuid')
const { pool } = require("../../config/db")
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");



const add_to_cart = (req, reply) => {
    const data = req.body;


    pool.query('SELECT * FROM `cart` WHERE `fruite_id`=? AND `user_id`=?',
        [
          
            data.fruite_id,
            data.user_id,
            



        ], async (error, results, fields) => {

            const numRows = results.length
       
         
            if (numRows > 0) {
                reply.send({
                    error: "false",
                    message: `Fruite Already In The Cart`
                })
                
               
            }else{
                pool.query('INSERT INTO `cart`(`fruite_id`, `user_id`, `quantity`) VALUES (?,?,?)',
                [
                   
                    data.fruite_id,
                    data.user_id,
                    1
        
        
        
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
                            message: `Fruite Added Successful`,
                           
                           
                        })
                    }
                   
        
                })
            }
           

        })



}

module.exports = {
    add_to_cart,
}