const {getFruits} = require('../../controller/home_controller/fruits')

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
    handler: getFruits
}





function fruiteRoutes(fastify, options, done) {
    fastify.post('/home/fruits', getFruits)
    done()
}
module.exports = fruiteRoutes