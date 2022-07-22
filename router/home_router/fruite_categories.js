const {getCategories} = require('../../controller/home_controller/fruite_categories')

//getAl

const getCategoriesOpts = {
    schema: {
        response: {
            200: {
                
                    type: 'object',
                    name:'user',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        details: { type: 'string' },
                        discount: { type: 'string' },
                       
                    }
                
            }
        }
    },
    handler: getCategories
}





function fruiteCategories(fastify, options, done) {
    fastify.get('/home/categories', getCategories)
    done()
}
module.exports = fruiteCategories