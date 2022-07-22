const { v4: uuidv4 } = require('uuid')
const { pool } = require("../../config/db")
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");




const signup = (req, reply) => {
    const data = req.body;

        const salt = genSaltSync(10)
       
        data.pass = hashSync(data.pass, salt)

    pool.query('SELECT * FROM `users` WHERE `mobile_number`=? AND `cnic`=?',
        [
            data.mobile_number,
            data.cnic

        ], (error, results, fields) => {
            const numRows = results.length
            if (error) {
                console.log(error)

                reply.send({
                    error: "true",
                    message: `Internet Error...!`

                })
            }



            if (numRows != 0) {


                reply.send({
                    error: "true",
                    message: `This ${data.mobile_number} number Already Registered`

                })
            } else {


                pool.query('INSERT INTO `users`( `name`, `cnic`, `mobile_number`, `pass`,`image_url`) VALUES(?,?,?,?,?)',
                    [
                        data.name,
                        data.cnic,
                        data.mobile_number,
                        data.pass,
                        data.image_url

                    ], (error, results, fields) => {
                        if (error) {
                            reply.send({
                                error: "true",
                                message: `Internet Error...!`
                            }
                            )
                        }
                        reply.send({
                            error: "false",
                            message: `Signup Successful`
                        }

                        )
                    }



                )



            }

        })


}


module.exports = {
    signup,
}