const { v4: uuidv4 } = require('uuid')
const { pool } = require("../../config/db")
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");



const like_fruite = (req, reply) => {
    const data = req.body;





    pool.query('INSERT INTO `like_fruite`( `user_id`, `fruite_id`) VALUES (?,?) ',
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
                    message: `Fruite Like Successful`,
                   
                   
                })
            }
           

        })
}

module.exports = {
    like_fruite,
}