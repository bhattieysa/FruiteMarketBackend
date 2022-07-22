const {getUser} = require('../../controller/user_controller/user')

//getAl

const getUserOpts = {
    schema: {
        response: {
            200: {
                
                    type: 'object',
                    name:'user',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        cnic: { type: 'string' },
                        mobile_number: { type: 'string' },
                        pass: { type: 'string' },
                        image_url: { type: 'string' }
                    }
                
            }
        }
    },
    handler: getUser
}





function userRoutes(fastify, options, done) {
    fastify.post('/user/myaccount', getUserOpts)
    done()
}
module.exports = userRoutes