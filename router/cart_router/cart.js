const {Cart} = require('../../controller/cart_controller/cart')

//getAl

// const getUserOpts = {
//     schema: {
//         response: {
//             200: {
                
//                     type: 'object',
//                     name:'user',
//                     properties: {
//                         id: { type: 'string' },
//                         name: { type: 'string' },
//                         cnic: { type: 'string' },
//                         mobile_number: { type: 'string' },
//                         pass: { type: 'string' },
//                         image_url: { type: 'string' }
                        
//                     }
                
//             }
//         }
//     },
//     handler: Fav
// }





function cartRoutes(fastify, options, done) {
    fastify.post('/cart/view', Cart)
    done()
}
module.exports = cartRoutes