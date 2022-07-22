const { v4: uuidv4 } = require('uuid')
//let items = require('../items.js')
const { pool } = require("../../config/db")



const getFruits = async (req, reply) => {
    const data = req.body;
    // var sub_array = {}


    // for (var i = 1; i <= 3; i++) {

    //     var array = [{
    //         "name": i,
    //         "num": i + 1,
    //         "like": true
    //     }]

    //     sub_array[i] = array;


    // }
    // console.log(sub_array)



    pool.query("SELECT * FROM `fruits` WHERE `category_id`=?",
        [
            data.category_id
        ], (error, results, fields) => {
            const numRows = results.length
            const fruite_id = results[0].id
            var super_array = [];

            if (numRows > 0) {
                var mainObject = {}; // empty Object
                for (const e of results) {
                    pool.query("SELECT * FROM `fruits` WHERE `category_id`=?",
                        [
                            data.category_id
                        ], async (error, results, fields) => {
                            const numRows = results.length
                            const fruite_id = results[0].id
                            var mainObject = {};
                            if (numRows > 0) {     
                                for  (const e of results) {
                                    try {
                                       const res = await pool.query("SELECT `id`, `user_id`, `fruite_id` FROM `like_fruite` WHERE `user_id`=? AND `fruite_id`=?",
                                            [
                                                data.user_id,
                                                `${e.id}`
                                            ], (error, results1, fields) => {
                                                if (results1[0] != undefined) {
                                                    var innerObject = [{
                                                        "id": e.id,
                                                        "name": e.name,
                                                        "price": e.price,
                                                        "image": e.image,
                                                        "unit": e.unit,
                                                        "category_id": e.category_id,
                                                        "ratings": e.ratings,
                                                        "details": e.details,
                                                        "like": true
                                                    }]
                                                    mainObject[e.id] = innerObject;
                                                    console.log("inside Loop",  mainObject[e.id] )
                                                }
                                            }) }
                                    catch (err) {
                                        console.error(err)
                                    }
                                }
                                console.log("Out Of Loop",mainObject)
                                reply.send(mainObject)
                            
                            } else {
                                reply.send(new Error('Fruits Not Exist'))
                            }


                        })



                }


            } else {
                reply.send(new Error('Fruits Not Exist'))
            }


        })
}


module.exports = {
    getFruits
}