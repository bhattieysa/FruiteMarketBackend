const {login} = require('../../controller/auth_controller/login')

//getAl

const getLoginOpts = {
    schema: {
        response: {
            200: {
                type:'object',
                properties:{
                    error:{type :'string'},
                    message:{type :'string'},
                    token:{type :'string'},
                    userId:{type :'string'}
                }
            },
        }
    },
    handler: login
}





function loginRoutes(fastify, options, done) {
    fastify.post('/login', getLoginOpts)
    done()
}
module.exports = loginRoutes