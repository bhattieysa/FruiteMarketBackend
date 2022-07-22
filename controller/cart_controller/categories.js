const { v4: uuidv4 } = require('uuid')
//let items = require('../items.js')
const { pool } = require("../../config/db")



const Categories = async (req, reply) => {
    const data = req.body;
    pool.query("SELECT fruits.id,fruits.category_id FROM `cart` JOIN fruits ON fruits.id=cart.fruite_id WHERE cart.user_id=? GROUP BY fruits.category_id",
        [
           data.user_id,
       
        ], (error, results, fields) => {
            const numRows = results.length
        
            if (numRows > 0) {
                reply.send(results)

            } else {
                reply.send(new Error('Cart Is Empty'))
            }
        })
}


module.exports = {
    Categories
}