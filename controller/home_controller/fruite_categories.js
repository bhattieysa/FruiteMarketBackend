const { v4: uuidv4 } = require('uuid')
//let items = require('../items.js')
const { pool } = require("../../config/db")



const getCategories = async (req, reply) => {
    
    pool.query("SELECT * FROM `fruite_categories`",[],
         (error, results, fields) => {
            const numRows = results.length
            if (numRows > 0) {
                reply.send(results)

               // console.log(results)

            } else {
                reply.send(new Error('Categories Not Exist'))
            }


        })
}


module.exports = {
    getCategories
}