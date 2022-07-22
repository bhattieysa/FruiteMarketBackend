const { v4: uuidv4 } = require('uuid')
const { pool } = require("../../config/db")
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");



const login = (req, reply) => {
    const data = req.body;





    pool.query('SELECT * FROM `users` WHERE `mobile_number`=? ',
        [
            data.mobile_number,


        ], async (error, results, fields) => {
            if (error) {
                console.log(error)
                reply.send({
                    error: "true",
                    message: `Internet error...!`
                })
            }
            console.log(results)
            const numRows = results.length
            if (numRows != 0) {
                const result = await compareSync(data.pass, results[0].pass)
                if (result) {
                    const jsontoken = sign({ result: results }, process.env.JSON_TOKEN_CODE, {
                        algorithm:"HS256",
                        expiresIn: '1h'
                    })
                    reply.send({
                        error: "false",
                        message: `Login Successful`,
                        token: jsontoken,
                        userId:results[0].id,
                       
                    })
                } else {
                    reply.send({
                        error: "true",
                        message: `In Valid Password`
                    })
                }
            } else {
                reply.send({
                    error: "true",
                    message: `In Valid Mobilenumber`
                })
            }
        })
}

module.exports = {
    login,
}