const { v4: uuidv4 } = require('uuid')
//let items = require('../items.js')
const { pool } = require("../../config/db")



const getFruits = async (req, reply) => {
    const data = req.body;
                    pool.query("SELECT * FROM `fruits` WHERE `category_id`=?",
                        [
                            data.category_id
                        ], async (error, results, fields) => {
                            const numRows = results.length
                          
                            var mainObject = {};
                            if (numRows > 0) {     
                                for  (const e of results) {
                                    try {
                                        // yaha promise islia lagya...phala ya query run ho phr ya return karay and than aga chalay process
                                        await new Promise((resolve, reject) => {
                                       pool.query("SELECT `id`, `user_id`, `fruite_id` FROM `like_fruite` WHERE `user_id`=? AND `fruite_id`=?",
                                            [
                                                data.user_id,
                                                `${e.id}`
                                            ], (error, results1, fields) => {
                                                if (error) return reject(error)

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
                                                    //console.log("inside Loop",  mainObject[e.id] )
                                                    resolve()
                                                }else{
                                                    var innerObject = [{
                                                        "id": e.id,
                                                        "name": e.name,
                                                        "price": e.price,
                                                        "image": e.image,
                                                        "unit": e.unit,
                                                        "category_id": e.category_id,
                                                        "ratings": e.ratings,
                                                        "details": e.details,
                                                        "like": false
                                                    }]
                                                    mainObject[e.id] = innerObject;
                                                    //console.log("inside Loop",  mainObject[e.id] )
                                                    resolve()
                                                }

                                            })
                                        })
                                        }
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


module.exports = {
    getFruits
}