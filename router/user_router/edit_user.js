const {edit_user} = require('../../controller/user_controller/edit_user')

//getAl

const getEditAccountpOpts = {
    schema: {
        response: {
            200: {
                type:'object',
                properties:{
                    error:{type :'string'},
                    message:{type :'string'}
                }
            },
        }
    },
    handler: edit_user 
}

function editUserRoutes(fastify, options, done) {
   
    fastify.post('/user/editaccount', getEditAccountpOpts)
    done()
}




module.exports = editUserRoutes