const { v4: uuidv4 } = require('uuid')
//let items = require('../items.js')
const { pool } = require("../../config/db")



const getUser = async (req, reply) => {
    const data = req.body;
    pool.query("SELECT * FROM `users` WHERE `mobile_number`=?",
        [
            data.mobile_number,
        ], (error, results, fields) => {
            const numRows = results.length
            if (numRows > 0) {
                reply.send(results[0])

                console.log(results[0])

            } else {
                reply.send(new Error('User Not Exist'))
            }


        })
}


module.exports = {
    getUser
}