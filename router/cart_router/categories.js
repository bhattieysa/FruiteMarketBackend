const {Categories} = require('../../controller/cart_controller/categories')

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





function cartCategoryRoutes(fastify, options, done) {
    fastify.post('/cart/categories', Categories)
    done()
}
module.exports = cartCategoryRoutes