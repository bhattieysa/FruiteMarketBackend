const { v4: uuidv4 } = require('uuid')
const { pool } = require("../../config/db")
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");



const nutrition_fruite = (req, reply) => {
    const data = req.body;





    pool.query('SELECT `id`, `name`, `fruite_id` FROM `nutrition_fruite` WHERE `fruite_id`=? ',
        [
            data.fruite_id

        ], async (error, results, fields) => {
            const numRows = results.length
          
          console.log(results)
            if (numRows > 0) {
                reply.send(results)
            }else{
                reply.send(new Error('Nutrition Not Exist'))
            }
           

        })
}

module.exports = {
    nutrition_fruite,
}