
const { pool } = require("../../config/db")
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");




const edit_user =async (req, reply) => {
    const data = req.body;

    const salt = genSaltSync(10)

    //data.pass = hashSync(data.pass, salt)



    pool.query("UPDATE `users` SET `name`=?,`cnic`=?,`mobile_number`=? WHERE `id`=?",
        [
            data.name,
            data.cnic,
            data.mobile_number,
            data.id,
          

        ], (error, results, fields) => {
            if (error) {
                reply.send({
                    error: error,
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


module.exports = {
    edit_user,
}