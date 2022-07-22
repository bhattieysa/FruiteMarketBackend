const { v4: uuidv4 } = require('uuid')
//let items = require('../items.js')
const { pool } = require("../../config/db")



const Cart = async (req, reply) => {
    const data = req.body;
    pool.query("SELECT fruits.id,fruits.name,fruits.price,fruits.image,fruits.unit,fruits.category_id,cart.quantity FROM `cart` JOIN fruits ON fruits.id=cart.fruite_id WHERE cart.user_id=?AND fruits.category_id=? ",
        [
           data.user_id,
           data.category_id,
        ], (error, results, fields) => {
            const numRows = results.length
          
          
            if (numRows > 0) {

console.log(numRows)

                reply.send(results)

            } else {
                reply.send(new Error('Cart Is Empty'))
            }
        })
}


module.exports = {
    Cart
}