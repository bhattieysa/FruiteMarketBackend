const { v4: uuidv4 } = require('uuid')
//let items = require('../items.js')
const { pool } = require("../../config/db")



const Fav = async (req, reply) => {
    const data = req.body;
    pool.query("SELECT like_fruite.id ,fruits.name , fruits.price , fruits.image ,fruits.unit,fruits.ratings,fruits.details,fruits.category_id FROM `like_fruite` JOIN fruits ON fruits.id=like_fruite.fruite_id WHERE like_fruite.user_id=?",
        [
           data.user_id
        ], (error, results, fields) => {
            const numRows = results.length
            const fruite_id=results[0].id
            console.log(results[0].id)
            if (numRows > 0) {
                reply.send(results)

            } else {
                reply.send(new Error('Fruits Like Not Exist'))
            }
        })
}


module.exports = {
    Fav
}