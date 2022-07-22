const {add_to_cart} = require('../../controller/home_controller/add_to_cart')

//getAl

const getAddToCartFruiteOpts = {
    schema: {
        response: {
            200: {
                type:'object',
                properties:{
                    error:{type :'string'},
                    message:{type :'string'},
                    
                }
            },
        }
    },
    handler: add_to_cart
}





function addToCartRoutes(fastify, options, done) {
    fastify.post('/home/addtocart', getAddToCartFruiteOpts)
    done()
}
module.exports = addToCartRoutes