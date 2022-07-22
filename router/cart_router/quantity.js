const {quantity} = require('../../controller/cart_controller/quantity')

//getAl

const getQuantityOpts = {
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
    handler: quantity
}





function quantityRoutes(fastify, options, done) {
    fastify.post('/cart/quantity', getQuantityOpts)
    done()
}
module.exports = quantityRoutes